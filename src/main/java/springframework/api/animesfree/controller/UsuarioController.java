package springframework.api.animesfree.controller;

import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import springframework.api.animesfree.models.Usuario;
import springframework.api.animesfree.repository.UsuarioRepository;

@RestController
@RequestMapping("/api")
public class UsuarioController {
    private DateFormat dateFormat = new SimpleDateFormat("HH:MM:SS");
    private Date dataAtual = new Date(0);

    @Autowired
    UsuarioRepository usuarioRepository;

    @GetMapping("/usuario")
    public List<Usuario> mostrarTodosUsuarios(){
        System.out.println("Requisição GET - procurando todos os usuarios "+ dateFormat.format(dataAtual) );
        return usuarioRepository.findAll();
        
    }


    // @GetMapping("/usuario/{id}")
    // public Usuario mostrarUsuarioPeloId(@PathVariable(value = "id") long id){
    //     return usuarioRepository.findById(id);
    // }
    @PostMapping("/usuario")
    public Usuario salvarUsuario(@RequestBody Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    @PutMapping("/usuario")
    public Usuario atualizarUsuario(@RequestBody Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    @DeleteMapping("/usuario/{id}")
    public void deletarUsuarioPeloId(@PathVariable(value = "id") long id){
        usuarioRepository.deleteById(id);
    }
}
