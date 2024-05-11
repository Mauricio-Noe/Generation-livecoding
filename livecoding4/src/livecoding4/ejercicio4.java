package livecoding4;

public class ejercicio4 {

	public static void main(String[]args) {
		
		
		 
		for (int num= 1; num <=100; num++) {
			if (num % 3 == 0 && num % 5 == 0) {
				System.out.println("fizzBuzz");

				
			} else if (num%3 ==0) {
				System.out.println("Fizz");
				
			} else if (num % 5 ==0) {
				System.out.println("Bozz");
			} else {
				System.out.println(num);
			}
		}
		
	
	}

}
  