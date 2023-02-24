package springframework.api.animesfree.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WellcomeApi {
    
    @GetMapping()
    public String homePgae(){
        return "<h1>Bem-VIndo a API de Animesfree</h1>";
    }
}
