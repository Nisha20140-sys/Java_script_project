import java.io.*;
import java.util.*;

// import jdk.javadoc.internal.doclets.formats.html.resources.standard;

class Count_Distinct_elements {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int arr[] = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        HashMap<Integer, Integer> mp = new HashMap<>();
        for (int i = 0; i < k; i++) {
            mp.put(arr[i], mp.getOrDefault(arr[i], 0) + 1);
        }
        System.out.print(mp.size() + " ");
        for (int i = k; i < n; i++) {
            mp.put(arr[i], mp.getOrDefault(arr[i], 0) + 1);
            if (mp.get(arr[i - k]) == 1) {
                mp.remove(arr[i - k]);
            } else {
                mp.put(arr[i - k], mp.get(arr[i - k]) - 1);
            }
            System.out.print(mp.size() + " ");
        }
    }
}