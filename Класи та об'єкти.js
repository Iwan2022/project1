import java.io.*;

class CalculationResult implements Serializable {
    private static final long serialVersionUID = 1L;
    private transient int parameter1;
    private int parameter2;
    private double result;

    public CalculationResult(int parameter1, int parameter2, double result) {
        this.parameter1 = parameter1;
        this.parameter2 = parameter2;
        this.result = result;
    }

    public int getParameter1() {
        return parameter1;
    }

    public int getParameter2() {
        return parameter2;
    }

    public double getResult() {
        return result;
    }
}

class ProblemSolver {
    public static CalculationResult solveProblem(int parameter1, int parameter2) {
        double result = parameter1 + parameter2 * 2.5;
        return new CalculationResult(parameter1, parameter2, result);
    }
}

public class SerializationDemo {

    public static void main(String[] args) {
        int parameter1 = 10;
        int parameter2 = 5;

        CalculationResult result = ProblemSolver.solveProblem(parameter1, parameter2);

        serializeObject(result);

        CalculationResult deserializedResult = deserializeObject();

        System.out.println("Оригінальний результат: " + result);
        System.out.println("Десеріалізований результат: " + deserializedResult);
    }

    private static void serializeObject(CalculationResult object) {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("serializedObject.ser"))) {
            oos.writeObject(object);
            System.out.println("Об'єкт був серіалізований.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static CalculationResult deserializeObject() {
        CalculationResult deserializedObject = null;
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("serializedObject.ser"))) {
            deserializedObject = (CalculationResult) ois.readObject();
            System.out.println("Об'єкт був десеріалізований.");
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        return deserializedObject;
    }
}

class TestCalculator {
    public static void main(String[] args) {
        int parameter1 = 10;
        int parameter2 = 5;

        CalculationResult result = ProblemSolver.solveProblem(parameter1, parameter2);

        assert result != null;
        assert result.getResult() == parameter1 + parameter2 * 2.5;

        System.out.println("Тест пройдено успішно.");
    }
}
