static long  Fibonacci(long  n) 
    { 
  //Enter your code here
  if (n<=1){ 
        return 0;
  }
  else if (n==2){ 
        return 1;
      }else{
        return Fibonacci(n-1)+Fibonacci(n-2) ;
      }
    }