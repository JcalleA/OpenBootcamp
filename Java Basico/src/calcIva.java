public class calcIva {

    public static  int calcular(int precio){
        int iva = (int) (precio*0.19);
        return iva;

    }

    public static void main(String[] args) throws Exception {
    System.out.println(calcular(10000));

    
}
}