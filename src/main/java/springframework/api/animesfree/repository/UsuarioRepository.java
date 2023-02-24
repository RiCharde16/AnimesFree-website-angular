package springframework.api.animesfree.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import springframework.api.animesfree.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    
}
