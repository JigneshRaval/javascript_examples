dim islocked

do
    call checklock
loop while  islocked = 0

'=================================
'Functions
'=================================

function checklock
	Set objFSO=CreateObject("Scripting.FileSystemObject")

	Set objFile = objFSO.CreateTextFile("C:\Temp\ScriptLog.txt", True)
	
    Dim computer : computer = "."

    If WScript.Arguments.Count = 1 Then
        computer = WScript.Arguments(0)
    End If

    If locked(computer) Then
        msgbox "debugging: locked" 
		objFile.Write "System is locked" & vbCrLf
		objFile.Close
    Else
        msgbox "debugging: not locked"
		objFile.Write "System not locked" & vbCrLf
		objFile.Close
        wscript.sleep 7000 'for debugging - allow time to enter lock screen
    End If      
end function


Function locked(computer)
    Dim wmi : Set wmi = GetObject("winmgmts://" & computer & "/root/cimv2")
    Dim lockapp_count : lockapp_count = wmi.ExecQuery ("SELECT * FROM Win32_Process WHERE Name = 'logonui.exe'").Count
    Dim explorer_count : explorer_count = wmi.ExecQuery ("SELECT * FROM Win32_Process WHERE Name = 'explorer.exe'").Count
    locked = (lockapp_count >= explorer_count)
End Function
