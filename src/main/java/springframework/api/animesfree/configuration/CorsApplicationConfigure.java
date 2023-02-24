package springframework.api.animesfree.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsApplicationConfigure implements WebMvcConfigurer{
    
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:4200","http://localhost:55008")
            .allowedMethods("GET","POST","PUT","DELETE","OPTIONS", "HEAD", "CONNECT");
    }
}