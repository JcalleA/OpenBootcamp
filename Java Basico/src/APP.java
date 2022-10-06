import java.util.ArrayList;
import java.util.List;

public class APP {
    public static void main(String[] args) throws Exception {
        List lista1 = new ArrayList();
        lista1.add(true);
        lista1.add(2);
        lista1.add("hola mundo");
        lista1.add(5.2);
        
        lista1.forEach(System.out::println);
    }
    
}

