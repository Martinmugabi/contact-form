 // Toggle password visibility
        document.querySelector('.toggle-password').addEventListener('click', function() {
            const passwordField = document.getElementById('password');
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
        
        // Form validation
        document.getElementById('signinForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');
            
            // Reset errors
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            
            let isValid = true;
            
            // Email validation
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                emailError.style.display = 'block';
                isValid = false;
            }
            
            // Password validation
            if (password.length < 6) {
                passwordError.style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                // Simulate login process
                const signinBtn = document.querySelector('.signin-btn');
                signinBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
                signinBtn.disabled = true;
                
                // In a real app, you would send this data to your server
                setTimeout(() => {
                    alert('Sign in successful! Redirecting to dashboard...');
                    // window.location.href = 'dashboard.html'; // Uncomment to redirect
                    signinBtn.innerHTML = 'Sign In';
                    signinBtn.disabled = false;
                }, 1500);
            }
        });
        
        // Social login buttons
        document.querySelectorAll('.social-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                const platform = this.classList.contains('facebook') ? 'Facebook' : 
                               this.classList.contains('google') ? 'Google' : 'Apple';
                alert(`Redirecting to ${platform} login...`);
                // In a real app, you would implement OAuth here
            });
        });