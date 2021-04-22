import java.io.*;
import java.util.*;

class Vehicle1 {
	// at first block will execute and then constructor
	{
		System.out.println("hey");
	}

	public Vehicle1() { // internally compiler treats
		System.out.println("print constructor");
	}

	{
		System.out.println("bye");
	}
	{
		System.out.println("tata bye");
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Vehicle1 v = new Vehicle1();

	}

}