package com.example.ecommerce.config;

import com.example.ecommerce.model.Product;
import com.example.ecommerce.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner seedProducts(ProductRepository productRepository) {
        return args -> {
            if (productRepository.count() == 0) {
                productRepository.saveAll(List.of(
                        new Product(null, "Wireless Headphones", "Noise-cancelling over-ear headphones", 129.99,
                                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"),
                        new Product(null, "Smart Watch", "Fitness tracker with heart-rate monitor", 89.50,
                                "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800"),
                        new Product(null, "Laptop Backpack", "Water-resistant backpack for 15-inch laptops", 54.00,
                                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800"),
                        new Product(null, "Mechanical Keyboard", "RGB backlit keyboard with tactile switches", 74.99,
                                "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800")
                ));
            }
        };
    }
}
