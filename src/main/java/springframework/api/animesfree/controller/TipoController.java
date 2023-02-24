package springframework.api.animesfree.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springframework.api.animesfree.models.Tipo;
import springframework.api.animesfree.repository.TipoRepository;

@RestController
@RequestMapping("/api")
public class TipoController {
    
    @Autowired
    TipoRepository tipoRepository;

    @GetMapping("/tipo")
    public List<Tipo> mostrarTodosOsTiposDeUsuario(){
        return tipoRepository.findAll();
    }
}
