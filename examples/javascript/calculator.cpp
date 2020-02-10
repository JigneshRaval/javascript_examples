// calculator.cpp
#include<stdio.h>
extern "C" {
   double calculate(double num1, double num2, int operation) {
      double result = 0;
      switch(operation) {

         case 1 :
              result = num1 + num2;
              break;
         case 2:
            result = num1 -num2;
            break;
         case 3:
            result = num1 *num2;
            break;
         case 4:
            result = num1 /num2;
            break;
       }
       return result;
  }
}
