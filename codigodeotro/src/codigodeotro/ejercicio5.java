package codigodeotro;

import java.util.Scanner;

public class ejercicio5 {
	



	  public static void main(String[] args) {
	    Scanner s = new Scanner(System.in);
	    System.out.print("Introduzca un número: "); 
	    String ni = s.nextLine();
	    int c = Integer.parseInt(ni);
	    int afo = 0;
	    int noAfo = 0;

	    while (c > 0) {
	      int digito = c % 10;
	      if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
	        afo++;
	      } else {
	        noAfo++; 
	      }
	      c /= 10; 
	    }

	    if (afo > noAfo) {
	      System.out.println("El " + ni + " es un número afortunado."); 
	    } else {
	      System.out.println("El " + ni + " no es un número afortunado.");
	    }

	    s.close();
	  }
	}

