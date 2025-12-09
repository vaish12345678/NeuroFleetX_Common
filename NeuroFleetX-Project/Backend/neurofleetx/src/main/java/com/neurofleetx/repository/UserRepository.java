// package com.neurofleetx.repository;

// import com.neurofleetx.model.User;
// import jakarta.transaction.Transactional;
// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

// import java.util.Optional;

// @Repository
// @Transactional
// public interface UserRepository extends JpaRepository<User, Long> {
//     Optional<User> findByEmail(String email);
// }
package com.neurofleetx.repository;

import com.neurofleetx.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
