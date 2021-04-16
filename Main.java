import java.io.*;
import java.util.*;

import org.graalvm.util.CollectionsUtil;

class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    HashMap<String, List<String>> mp = new HashMap<>();
    for (int i = 0; i < n; i++) {
      String str = sc.next();
      char[] p = str.toCharArray();
      Arrays.sort(p);
      String sorted = new String(p);
      if (mp.containsKey(sorted)) {
        mp.get(sorted).add(str);
      } else {
        List<String> ls = new ArrayList<>();
        ls.add(str);
        mp.put(sorted, ls);
      }
    }
    int q = sc.nextInt();
    for (int i = 0; i < q; i++) {
      String pq = sc.next();
      char[] w = pq.toCharArray();
      Arrays.sort(w);
      String st = new String(w);
      if (mp.containsKey(st)) {
        List<String> final_list = mp.get(st);
        // Collections.sort(final_list);
        for (int j = 0; j < final_list.size(); j++) {
          System.out.print(final_list.get(j));
        }
        System.out.println();
      } else
        System.out.println(-1);
    }

  }
}