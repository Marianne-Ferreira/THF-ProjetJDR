package ProjetJDR.THF_SpringBoot.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class Securityconfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// @formatter:off
		http.antMatcher("/api/**")
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				.and()
				.csrf().ignoringAntMatchers("/api/**")
				
				.and()
				.authorizeHttpRequests()
					.antMatchers(HttpMethod.OPTIONS).permitAll()
					 .antMatchers(HttpMethod.GET,"/api/auth", "/api/auth/login/**").permitAll()
					 .antMatchers(HttpMethod.POST,"/api/auth/inscription").permitAll()
                     
                     .antMatchers(HttpMethod.GET, "/api/admin/**").hasRole("ADMIN")
                     .antMatchers(HttpMethod.POST, "/api/admin/**").hasRole("ADMIN")
                     .antMatchers(HttpMethod.PATCH, "/api/admin/**").hasRole("ADMIN")
                     .antMatchers(HttpMethod.PUT, "/api/admin/**").hasRole("ADMIN")
                     .antMatchers(HttpMethod.DELETE, "/api/admin/**").hasRole("ADMIN")
                     
                     .antMatchers(HttpMethod.GET, "/api/joueur/**").hasRole("JOUEUR")
                     .antMatchers(HttpMethod.POST, "/api/joueur/**").hasRole("JOUEUR")
                     .antMatchers(HttpMethod.PATCH, "/api/joueur/**").hasRole("JOUEUR")
                     .antMatchers(HttpMethod.PUT, "/api/joueur/**").hasRole("JOUEUR")
                     .antMatchers(HttpMethod.DELETE, "/api/joueur/**").hasRole("JOUEUR")
					.antMatchers(HttpMethod.GET,"/api/compte/login/**").permitAll()
					.antMatchers(HttpMethod.POST,"/api/compte/inscription").permitAll()
					.anyRequest().authenticated()
				.and()
				.httpBasic();
		
//		http.antMatcher("/**")
//				.authorizeHttpRequests()
//					.antMatchers("/","/home","/formateur/**","/formlogin").permitAll()
//					.antMatchers("/matiere/**").hasRole("ADMIN")
//					.anyRequest().authenticated()
//				.and()
//				.formLogin()
//					.loginPage("/formlogin")
//					.defaultSuccessUrl("/secure/home")
//					.failureUrl("/formlogin?error=true")
//				.and()
//				.logout()
//					.logoutUrl("/logout")  //a appeler en POST!!!!!!!=> csrf à traiter
//					.logoutSuccessUrl("/home");
		// @formatter:on
	}

	@Autowired
	private UserDetailsService userDetailService;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// @formatter:off
//		auth.inMemoryAuthentication()
//				.withUser("admin").password("{noop}admin").roles("ADMINISTRATEUR")
//				.and()
//				.withUser("user1").password("{noop}user1").roles("USER");
		auth.userDetailsService(userDetailService);		
		// @formatter:on
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
