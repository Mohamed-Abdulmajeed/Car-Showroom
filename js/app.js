function carDealership() {
    return {
        currentPage: 'login',
        isLoggedIn: false,
        darkMode: false,
        loginError: '',
        loginEmail: '',
        loginPassword: '',
        registerName: '',
        registerEmail: '',
        registerPassword: '',
        selectedCar: null,
        cart: [],
        wishlist: [],
        cars: [
            {
                id: 1,
                name: 'Mercedes-Benz S-Class',
                description: 'Luxury sedan with premium features',
                price: 125000,
                year: 2024,
                mileage: '0 miles',
                fuel: 'Hybrid',
                transmission: 'Automatic',
                image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
                images: [
                    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617531653520-bd788c6823e5?w=800&h=600&fit=crop'
                ]
            },
            {
                id: 2,
                name: 'BMW M5 Competition',
                description: 'High-performance sports sedan',
                price: 115000,
                year: 2024,
                mileage: '0 miles',
                fuel: 'Gasoline',
                transmission: 'Automatic',
                image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
                images: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop'
                ]
            },
            {
                id: 3,
                name: 'Audi RS7 Sportback',
                description: 'Dynamic performance coupe',
                price: 135000,
                year: 2024,
                mileage: '0 miles',
                fuel: 'Gasoline',
                transmission: 'Automatic',
                image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
                images: [
                    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop'
                ]
            },
            {
                id: 4,
                name: 'Porsche 911 Turbo S',
                description: 'Iconic sports car excellence',
                price: 220000,
                year: 2024,
                mileage: '0 miles',
                fuel: 'Gasoline',
                transmission: 'PDK',
                image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
                images: [
                    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop'
                ]
            },
            {
                id: 5,
                name: 'Tesla Model S Plaid',
                description: 'Electric performance sedan',
                price: 135000,
                year: 2024,
                mileage: '0 miles',
                fuel: 'Electric',
                transmission: 'Single-Speed',
                image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop',
                images: [
                    'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop'
                ]
            },
            {
                id: 6,
                name: 'Range Rover Sport',
                description: 'Luxury SUV with off-road capability',
                price: 98000,
                year: 2024,
                mileage: '0 miles',
                fuel: 'Hybrid',
                transmission: 'Automatic',
                image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
                images: [
                    'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop'
                ]
            },
            {
                id: 7,
                name: 'Lamborghini Huracán',
                description: 'Italian supercar masterpiece',
                price: 275000,
                year: 2024,
                mileage: '0 miles',
                fuel: 'Gasoline',
                transmission: 'Automatic',
                image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
                images: [
                    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop'
                ]
            },
            {
                id: 8,
                name: 'Ferrari F8 Tributo',
                description: 'Pure Italian racing heritage',
                price: 295000,
                year: 2024,
                mileage: '0 miles',
                fuel: 'Gasoline',
                transmission: 'DCT',
                image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop',
                images: [
                    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop'
                ]
            }
        ],

        login() {
            this.loginError = '';
            // Required credentials: mohamed@gmail.com / 123456
            if (this.loginEmail === 'mohamed@gmail.com' && this.loginPassword === '123456') {
                this.isLoggedIn = true;
                this.currentPage = 'home';
            } else {
                this.isLoggedIn = false;
                this.loginError = 'Invalid credentials — use mohamed@gmail.com / 123456';
            }
        },

        register() {
            if (this.registerName && this.registerEmail && this.registerPassword) {
                this.isLoggedIn = true;
                this.currentPage = 'home';
            }
        },

        logout() {
            this.isLoggedIn = false;
            this.currentPage = 'login';
            this.cart = [];
            this.wishlist = [];
        },

        toggleDarkMode() {
            this.darkMode = !this.darkMode;
        },

        viewDetails(car) {
            this.selectedCar = car;
            this.currentPage = 'details';
            setTimeout(() => {
                new Swiper('.carSwiper', {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            }, 100);
        },

        addToCart(car) {
            if (!this.cart.find(c => c.id === car.id)) {
                this.cart.push(car);
            }
        },

        removeFromCart(carId) {
            this.cart = this.cart.filter(c => c.id !== carId);
        },

        toggleWishlist(car) {
            const index = this.wishlist.findIndex(c => c.id === car.id);
            if (index > -1) {
                this.wishlist.splice(index, 1);
            } else {
                this.wishlist.push(car);
            }
        },

        isInWishlist(carId) {
            return this.wishlist.some(c => c.id === carId);
        },

        get cartTotal() {
            return this.cart.reduce((sum, car) => sum + car.price, 0);
        }
    }
}
