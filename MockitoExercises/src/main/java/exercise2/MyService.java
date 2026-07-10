package exercise2;

public class MyService {

    private ExternalApi externalApi;

    public MyService(ExternalApi externalApi) {
        this.externalApi = externalApi;
    }

    public void process() {
        externalApi.sendData("Hello Mockito");
    }
}