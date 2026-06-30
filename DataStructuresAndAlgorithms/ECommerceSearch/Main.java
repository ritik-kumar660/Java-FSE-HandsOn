package DataStructuresAndAlgorithms.ECommerceSearch;

import java.util.Arrays;
import java.util.Comparator;

public class Main {

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Tablet", "Electronics")

        };

        // Linear Search

        Product result = SearchFunctions.linearSearch(products, "Shoes");

        if (result != null) {
            System.out.println("Linear Search  Product Found:");
            System.out.println(result.productId + " " +
                    result.productName + " " +
                    result.category);
        } else {
            System.out.println("Product Not Found");
        }

        // Sorting  before Binary Search bcz Binary search work on only sorted array

        Arrays.sort(products, Comparator.comparing(p -> p.productName));

        Product result2 = SearchFunctions.binarySearch(products, "Shoes");

        if (result2 != null) {
            System.out.println("\nBinary Search Product Found:");
            System.out.println(result2.productId + " " +
                    result2.productName + " " +
                    result2.category);
        } else {
            System.out.println("Product Not Found");
        }

    }
}