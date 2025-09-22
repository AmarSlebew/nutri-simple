 // Database makanan dengan makronutrien dari TKPI 2017 & USDA FoodData Central
        // Sumber: Kemenkes RI (TKPI 2017) & USDA FoodData Central
        const foodDatabase = {
            // === MAKANAN POKOK - TKPI 2017 ===
            "Nasi Putih": { calories: 129, protein: 2.7, carbs: 28.1, fat: 0.3, category: "Makanan Pokok", source: "TKPI 2017" },
            "Nasi Merah": { calories: 110, protein: 2.5, carbs: 22.9, fat: 0.9, category: "Makanan Pokok", source: "TKPI 2017" },
            "Nasi Goreng": { calories: 228, protein: 4.2, carbs: 31.7, fat: 9.4, category: "Makanan Pokok", source: "TKPI 2017" },
            "Mie Ayam": { calories: 125, protein: 4.9, carbs: 18.6, fat: 3.7, category: "Makanan Pokok", source: "TKPI 2017" },
            "Mie Goreng": { calories: 199, protein: 5.2, carbs: 40.0, fat: 2.7, category: "Makanan Pokok", source: "TKPI 2017" },
            "Roti Tawar Putih": { calories: 248, protein: 8.0, carbs: 50.0, fat: 1.2, category: "Makanan Pokok", source: "TKPI 2017" },
            "Kentang Rebus": { calories: 62, protein: 2.1, carbs: 13.5, fat: 0.1, category: "Makanan Pokok", source: "TKPI 2017" },
            "Jagung Rebus": { calories: 96, protein: 3.5, carbs: 22.8, fat: 1.0, category: "Makanan Pokok", source: "TKPI 2017" },
            
            // === LAUK PAUK - TKPI 2017 ===
            "Ayam Goreng": { calories: 298, protein: 18.2, carbs: 11.5, fat: 20.9, category: "Lauk Pauk", source: "TKPI 2017" },
            "Ayam Bakar": { calories: 164, protein: 25.8, carbs: 0, fat: 6.2, category: "Lauk Pauk", source: "TKPI 2017" },
            "Rendang Daging": { calories: 468, protein: 28.3, carbs: 4.5, fat: 37.0, category: "Lauk Pauk", source: "TKPI 2017" },
            "Ikan Bakar": { calories: 140, protein: 22.0, carbs: 0, fat: 4.5, category: "Lauk Pauk", source: "TKPI 2017" },
            "Ikan Goreng": { calories: 188, protein: 20.0, carbs: 2.0, fat: 10.3, category: "Lauk Pauk", source: "TKPI 2017" },
            "Telur Ayam Rebus": { calories: 154, protein: 12.4, carbs: 0.7, fat: 10.8, category: "Lauk Pauk", source: "TKPI 2017" },
            "Telur Dadar": { calories: 199, protein: 10.8, carbs: 1.5, fat: 17.0, category: "Lauk Pauk", source: "TKPI 2017" },
            "Tahu Goreng": { calories: 134, protein: 10.6, carbs: 4.9, fat: 8.1, category: "Lauk Pauk", source: "TKPI 2017" },
            "Tempe Goreng": { calories: 192, protein: 14.0, carbs: 11.5, fat: 10.8, category: "Lauk Pauk", source: "TKPI 2017" },
            "Sate Ayam (5 tusuk)": { calories: 210, protein: 14.1, carbs: 3.0, fat: 15.5, category: "Lauk Pauk", source: "TKPI 2017" },
            
            // === SAYURAN - TKPI 2017 ===
            "Gado-gado": { calories: 136, protein: 4.0, carbs: 9.4, fat: 9.0, category: "Sayuran", source: "TKPI 2017" },
            "Sayur Asem": { calories: 31, protein: 1.5, carbs: 7.2, fat: 0.2, category: "Sayuran", source: "TKPI 2017" },
            "Cap Cay": { calories: 58, protein: 2.8, carbs: 8.8, fat: 1.7, category: "Sayuran", source: "TKPI 2017" },
            "Tumis Kangkung": { calories: 36, protein: 3.0, carbs: 6.2, fat: 0.7, category: "Sayuran", source: "TKPI 2017" },
            "Sayur Sop": { calories: 18, protein: 1.2, carbs: 3.8, fat: 0.2, category: "Sayuran", source: "TKPI 2017" },
            "Bayam Rebus": { calories: 36, protein: 3.5, carbs: 6.5, fat: 0.5, category: "Sayuran", source: "TKPI 2017" },
            "Buncis Rebus": { calories: 35, protein: 2.4, carbs: 7.1, fat: 0.2, category: "Sayuran", source: "TKPI 2017" },
            
            // === BUAH-BUAHAN - TKPI 2017 ===
            "Pisang Ambon": { calories: 99, protein: 1.2, carbs: 25.8, fat: 0.2, category: "Buah", source: "TKPI 2017" },
            "Pisang Raja": { calories: 118, protein: 1.0, carbs: 31.8, fat: 0.2, category: "Buah", source: "TKPI 2017" },
            "Jeruk Manis": { calories: 45, protein: 0.9, carbs: 11.2, fat: 0.2, category: "Buah", source: "TKPI 2017" },
            "Mangga Golek": { calories: 46, protein: 0.6, carbs: 12.1, fat: 0.1, category: "Buah", source: "TKPI 2017" },
            "Pepaya": { calories: 46, protein: 0.5, carbs: 12.2, fat: 0.1, category: "Buah", source: "TKPI 2017" },
            "Semangka": { calories: 28, protein: 0.5, carbs: 6.9, fat: 0.2, category: "Buah", source: "TKPI 2017" },
            "Apel Malang": { calories: 58, protein: 0.3, carbs: 14.9, fat: 0.4, category: "Buah", source: "TKPI 2017" },
            "Rambutan": { calories: 69, protein: 1.0, carbs: 16.5, fat: 0.3, category: "Buah", source: "TKPI 2017" },
            
            // === MAKANAN INTERNASIONAL - USDA FoodData Central ===
            "Pizza Margherita": { calories: 266, protein: 11.4, carbs: 33.0, fat: 10.4, category: "Internasional", source: "USDA FDC" },
            "Burger Beef": { calories: 295, protein: 17.0, carbs: 24.0, fat: 16.0, category: "Internasional", source: "USDA FDC" },
            "Pasta Bolognese": { calories: 135, protein: 6.8, carbs: 18.0, fat: 4.4, category: "Internasional", source: "USDA FDC" },
            "Chicken Steak": { calories: 231, protein: 24.0, carbs: 0, fat: 14.8, category: "Internasional", source: "USDA FDC" },
            "Sandwich Club": { calories: 282, protein: 15.8, carbs: 26.2, fat: 13.4, category: "Internasional", source: "USDA FDC" },
            "Caesar Salad": { calories: 56, protein: 3.0, carbs: 3.0, fat: 4.5, category: "Internasional", source: "USDA FDC" },
            "Fried Rice": { calories: 163, protein: 4.2, carbs: 20.0, fat: 7.5, category: "Internasional", source: "USDA FDC" },
            "French Fries": { calories: 365, protein: 4.0, carbs: 63.0, fat: 17.0, category: "Internasional", source: "USDA FDC" },
            
            // === MINUMAN - TKPI 2017 & USDA ===
            "Es Teh Manis": { calories: 41, protein: 0, carbs: 10.7, fat: 0, category: "Minuman", source: "TKPI 2017" },
            "Kopi Hitam": { calories: 9, protein: 0.1, carbs: 1.8, fat: 0.2, category: "Minuman", source: "TKPI 2017" },
            "Kopi Susu": { calories: 74, protein: 2.2, carbs: 8.0, fat: 3.7, category: "Minuman", source: "TKPI 2017" },
            "Jus Jeruk": { calories: 51, protein: 0.5, carbs: 13.4, fat: 0.1, category: "Minuman", source: "TKPI 2017" },
            "Susu Sapi": { calories: 61, protein: 3.0, carbs: 4.3, fat: 3.5, category: "Minuman", source: "TKPI 2017" },
            "Air Mineral": { calories: 0, protein: 0, carbs: 0, fat: 0, category: "Minuman", source: "USDA FDC" },
            "Coca Cola": { calories: 42, protein: 0, carbs: 10.6, fat: 0, category: "Minuman", source: "USDA FDC" },
            
            // === SNACK & DESSERT - TKPI 2017 & USDA ===
            "Keripik Singkong": { calories: 526, protein: 2.5, carbs: 61.1, fat: 29.4, category: "Snack", source: "TKPI 2017" },
            "Biskuit Marie": { calories: 458, protein: 6.8, carbs: 71.5, fat: 16.4, category: "Snack", source: "TKPI 2017" },
            "Es Krim Vanilla": { calories: 207, protein: 3.5, carbs: 23.6, fat: 11.0, category: "Snack", source: "USDA FDC" },
            "Cokelat Susu": { calories: 535, protein: 7.9, carbs: 59.4, fat: 29.7, category: "Snack", source: "USDA FDC" },
            "Donat Gula": { calories: 421, protein: 4.6, carbs: 51.0, fat: 22.0, category: "Snack", source: "USDA FDC" },
            "Kue Lapis": { calories: 325, protein: 4.9, carbs: 54.2, fat: 10.4, category: "Snack", source: "TKPI 2017" },
            "Martabak Manis": { calories: 320, protein: 6.2, carbs: 45.0, fat: 13.5, category: "Snack", source: "TKPI 2017" }
        };

        // Global state untuk menyimpan profil
        let userProfile = {
            weight: null,
            height: null,
            bmi: null,
            targetCalories: null,
            goal: null,
            goalText: null
        };

        document.addEventListener('DOMContentLoaded', () => {
            // Initialize navigation
            const sections = document.querySelectorAll('.section');
            const navLinks = document.querySelectorAll('.nav-link');
            const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            function showSection(id) {
                sections.forEach(section => {
                    if (section.id === id) {
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                });
                window.scrollTo(0, 0);
                
                // Update dashboard when switching to it
                if (id === 'dashboard') {
                    updateDashboard();
                }
            }

            function navigate(e) {
                e.preventDefault();
                const targetId = e.currentTarget.getAttribute('href').substring(1);
                history.pushState({}, '', `#${targetId}`);
                showSection(targetId);
                updateActiveLink(targetId);
            }

            function updateActiveLink(targetId) {
                [...navLinks, ...mobileNavLinks].forEach(link => {
                    if (link.getAttribute('href') === `#${targetId}`) {
                        link.classList.add('bg-teal-50', 'text-teal-600');
                    } else {
                        link.classList.remove('bg-teal-50', 'text-teal-600');
                    }
                });
            }

            navLinks.forEach(link => link.addEventListener('click', navigate));
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    navigate(e);
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.querySelector('svg.block').classList.remove('hidden');
                    mobileMenuButton.querySelector('svg.hidden').classList.add('hidden');
                });
            });

            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenuButton.querySelector('svg.block').classList.toggle('hidden');
                mobileMenuButton.querySelector('svg.hidden').classList.toggle('hidden');
            });

            window.addEventListener('popstate', () => {
                const hash = window.location.hash.substring(1) || 'beranda';
                showSection(hash);
                updateActiveLink(hash);
            });
            
            const initialHash = window.location.hash.substring(1) || 'beranda';
            showSection(initialHash);
            updateActiveLink(initialHash);

            // Calculator functionality
            const calculatorForm = document.getElementById('calculator-form');
            calculatorForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const formData = new FormData(calculatorForm);
                const gender = formData.get('gender');
                const age = parseFloat(formData.get('age'));
                const weight = parseFloat(formData.get('weight'));
                const height = parseFloat(formData.get('height'));
                const activity = parseFloat(formData.get('activity'));
                const goal = formData.get('goal');

                if (isNaN(age) || isNaN(weight) || isNaN(height) || age <= 0 || weight <= 0 || height <= 0) {
                    alert('Mohon isi semua data dengan angka yang valid.');
                    return;
                }

                // Calculate BMI
                const heightInMeters = height / 100;
                const bmi = weight / (heightInMeters * heightInMeters);
                
                // Calculate BMR using Mifflin-St Jeor equation (more accurate)
                let bmr;
                if (gender === 'male') {
                    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
                } else {
                    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
                }
                
                const tdee = bmr * activity;

                // Calculate target based on goal
                let targetCalories;
                let goalDescription;
                let goalText;
                
                switch(goal) {
                    case 'lose':
                        targetCalories = Math.round(tdee - 300);
                        goalDescription = 'Defisit kalori untuk menurunkan berat badan';
                        goalText = 'Menurunkan berat badan';
                        break;
                    case 'gain':
                        targetCalories = Math.round(tdee + 300);
                        goalDescription = 'Surplus kalori untuk menaikkan berat badan';
                        goalText = 'Menaikkan berat badan';
                        break;
                    default:
                        targetCalories = Math.round(tdee);
                        goalDescription = 'Kalori untuk menjaga berat badan';
                        goalText = 'Menjaga berat badan';
                }

                // Store calculation results
                window.calculationResults = {
                    weight,
                    height,
                    bmi,
                    targetCalories,
                    goal,
                    goalText,
                    tdee: Math.round(tdee)
                };

                // Display results
                document.getElementById('bmi-result').textContent = bmi.toFixed(1);
                let bmiStatusText;
                if (bmi < 18.5) bmiStatusText = 'Berat Badan Kurang';
                else if (bmi < 24.9) bmiStatusText = 'Berat Badan Ideal';
                else if (bmi < 29.9) bmiStatusText = 'Berat Badan Berlebih';
                else bmiStatusText = 'Obesitas';
                document.getElementById('bmi-status').textContent = bmiStatusText;

                document.getElementById('target-calories').textContent = targetCalories;
                document.getElementById('goal-description').textContent = goalDescription;
                
                document.getElementById('tdee-maintain').textContent = `${Math.round(tdee)} kkal/hari`;
                document.getElementById('tdee-loss').textContent = `${Math.round(tdee - 300)} kkal/hari`;
                document.getElementById('tdee-gain').textContent = `${Math.round(tdee + 300)} kkal/hari`;
                
                document.getElementById('calculator-results').classList.remove('hidden');
            });

            // Save profile functionality
            document.getElementById('save-profile-btn').addEventListener('click', () => {
                if (window.calculationResults) {
                    userProfile = { ...window.calculationResults };
                    alert('Profil berhasil disimpan! Silakan cek dashboard Anda.');
                    // Navigate to dashboard
                    history.pushState({}, '', '#dashboard');
                    showSection('dashboard');
                    updateActiveLink('dashboard');
                }
            });

            // Set current date
            const today = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('current-date').textContent = today.toLocaleDateString('id-ID', options);

            // Initialize food database dropdown
            function initializeFoodDropdown() {
                const foodSelect = document.getElementById('food-select');
                const categories = {};
                
                // Group foods by category
                Object.keys(foodDatabase).forEach(food => {
                    const category = foodDatabase[food].category;
                    if (!categories[category]) categories[category] = [];
                    categories[category].push(food);
                });
                
                // Populate dropdown with optgroups
                Object.keys(categories).sort().forEach(category => {
                    const optgroup = document.createElement('optgroup');
                    optgroup.label = category;
                    
                    categories[category].sort().forEach(food => {
                        const option = document.createElement('option');
                        option.value = food;
                        option.textContent = food;
                        optgroup.appendChild(option);
                    });
                    
                    foodSelect.appendChild(optgroup);
                });
            }

            // Handle food selection and preview
            document.getElementById('food-select').addEventListener('change', function() {
                const selectedFood = this.value;
                const weightInput = document.getElementById('food-weight');
                const previewDiv = document.getElementById('nutrition-preview');
                
                if (selectedFood && foodDatabase[selectedFood]) {
                    previewDiv.classList.remove('hidden');
                    weightInput.value = weightInput.value || '100';
                    updateNutritionPreview();
                } else {
                    previewDiv.classList.add('hidden');
                }
            });

            // Handle weight change and update preview
            document.getElementById('food-weight').addEventListener('input', function() {
                const selectedFood = document.getElementById('food-select').value;
                if (selectedFood && foodDatabase[selectedFood]) {
                    updateNutritionPreview();
                }
            });

            function updateNutritionPreview() {
                const selectedFood = document.getElementById('food-select').value;
                const weight = parseFloat(document.getElementById('food-weight').value) || 100;
                
                if (selectedFood && foodDatabase[selectedFood]) {
                    const food = foodDatabase[selectedFood];
                    const multiplier = weight / 100;
                    
                    document.getElementById('preview-weight').textContent = weight;
                    document.getElementById('preview-calories').textContent = Math.round(food.calories * multiplier);
                    document.getElementById('preview-protein').textContent = (food.protein * multiplier).toFixed(1) + 'g';
                    document.getElementById('preview-carbs').textContent = (food.carbs * multiplier).toFixed(1) + 'g';
                    document.getElementById('preview-fat').textContent = (food.fat * multiplier).toFixed(1) + 'g';
                }
            }

            function updateNutritionPreview() {
                const selectedFood = document.getElementById('food-select').value;
                const weight = parseFloat(document.getElementById('food-weight').value) || 100;
                
                if (selectedFood && foodDatabase[selectedFood]) {
                    const food = foodDatabase[selectedFood];
                    const multiplier = weight / 100;
                    
                    document.getElementById('preview-weight').textContent = weight;
                    document.getElementById('preview-calories').textContent = Math.round(food.calories * multiplier);
                    document.getElementById('preview-protein').textContent = (food.protein * multiplier).toFixed(1) + 'g';
                    document.getElementById('preview-carbs').textContent = (food.carbs * multiplier).toFixed(1) + 'g';
                    document.getElementById('preview-fat').textContent = (food.fat * multiplier).toFixed(1) + 'g';
                    document.getElementById('data-source').textContent = `Sumber: ${food.source}`;
                }
            }

            // Food log functionality with macronutrients
            let foodLog = [];
            const foodListEl = document.getElementById('food-list');
            const foodForm = document.getElementById('food-form');
            const caloriesConsumedEl = document.getElementById('calories-consumed');
            const caloriesTotalEl = document.getElementById('calories-total');
            const emptyLogMessage = document.getElementById('empty-log-message');

            function renderFoodLog() {
                foodListEl.innerHTML = '';
                if(foodLog.length === 0){
                    emptyLogMessage.style.display = 'block';
                } else {
                    emptyLogMessage.style.display = 'none';
                    foodLog.forEach((food, index) => {
                        const li = document.createElement('li');
                        li.className = 'bg-stone-50 p-3 rounded-md';
                        li.innerHTML = `
                            <div class="flex justify-between items-start">
                                <div class="flex-grow">
                                    <div class="flex justify-between items-center">
                                        <p class="font-medium text-stone-700">${food.name}</p>
                                        <button data-index="${index}" class="remove-food-btn text-stone-400 hover:text-red-500 text-xl ml-2">&times;</button>
                                    </div>
                                    <p class="text-sm text-stone-500">${food.weight}g • ${food.calories} kkal</p>
                                    <div class="flex space-x-3 mt-1 text-xs">
                                        <span class="text-blue-600">P: ${food.protein}g</span>
                                        <span class="text-orange-600">K: ${food.carbs}g</span>
                                        <span class="text-red-600">L: ${food.fat}g</span>
                                    </div>
                                </div>
                            </div>
                        `;
                        foodListEl.appendChild(li);
                    });
                }
                updateCalorieChart();
                updateMacronutrientSummary();
            }

            function updateMacronutrientSummary() {
                const totals = foodLog.reduce((sum, food) => ({
                    protein: sum.protein + food.protein,
                    carbs: sum.carbs + food.carbs,
                    fat: sum.fat + food.fat
                }), { protein: 0, carbs: 0, fat: 0 });

                document.getElementById('total-protein').textContent = totals.protein.toFixed(1) + 'g';
                document.getElementById('total-carbs').textContent = totals.carbs.toFixed(1) + 'g';
                document.getElementById('total-fat').textContent = totals.fat.toFixed(1) + 'g';
            }
            
            foodForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const selectedFood = document.getElementById('food-select').value;
                const weight = parseFloat(document.getElementById('food-weight').value);
                
                if (selectedFood && weight > 0 && foodDatabase[selectedFood]) {
                    const food = foodDatabase[selectedFood];
                    const multiplier = weight / 100;
                    
                    const foodEntry = {
                        name: selectedFood,
                        weight: weight,
                        calories: Math.round(food.calories * multiplier),
                        protein: parseFloat((food.protein * multiplier).toFixed(1)),
                        carbs: parseFloat((food.carbs * multiplier).toFixed(1)),
                        fat: parseFloat((food.fat * multiplier).toFixed(1))
                    };
                    
                    foodLog.push(foodEntry);
                    renderFoodLog();
                    
                    // Reset form
                    document.getElementById('food-select').value = '';
                    document.getElementById('food-weight').value = '';
                    document.getElementById('nutrition-preview').classList.add('hidden');
                } else {
                    alert('Mohon pilih makanan dan masukkan berat yang valid.');
                }
            });
            
            foodListEl.addEventListener('click', (e) => {
                if(e.target.classList.contains('remove-food-btn')) {
                    const index = parseInt(e.target.dataset.index, 10);
                    foodLog.splice(index, 1);
                    renderFoodLog();
                }
            });

            // Initialize chart
            const ctx = document.getElementById('calorie-chart').getContext('2d');
            let calorieChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Terkonsumsi', 'Sisa'],
                    datasets: [{
                        data: [0, 2000],
                        backgroundColor: ['#14b8a6', '#f1f5f9'],
                        borderColor: ['#14b8a6', '#f1f5f9'],
                        borderWidth: 1,
                        cutout: '80%',
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: { enabled: false }
                    }
                }
            });

            function updateDashboard() {
                const hasProfile = userProfile.targetCalories !== null;
                const noProfileWarning = document.getElementById('no-profile-warning');
                const dashboardContent = document.getElementById('dashboard-content');
                
                if (hasProfile) {
                    noProfileWarning.style.display = 'none';
                    dashboardContent.style.display = 'grid';
                    
                    // Update profile display
                    document.getElementById('profile-weight').textContent = `${userProfile.weight} kg`;
                    document.getElementById('profile-height').textContent = `${userProfile.height} cm`;
                    document.getElementById('profile-bmi').textContent = userProfile.bmi.toFixed(1);
                    document.getElementById('profile-target').textContent = `${userProfile.targetCalories} kkal/hari`;
                    document.getElementById('profile-goal').textContent = userProfile.goalText;
                    
                    // Update calorie target
                    caloriesTotalEl.textContent = userProfile.targetCalories;
                    updateCalorieChart();
                } else {
                    noProfileWarning.style.display = 'block';
                    dashboardContent.style.display = 'none';
                }
            }

            function updateCalorieChart() {
                const consumed = foodLog.reduce((sum, food) => sum + food.calories, 0);
                const target = userProfile.targetCalories || 2000;
                const remaining = Math.max(0, target - consumed);
                
                caloriesConsumedEl.textContent = consumed;
                caloriesTotalEl.textContent = target;
                
                calorieChart.data.datasets[0].data[0] = consumed;
                calorieChart.data.datasets[0].data[1] = remaining;
                calorieChart.update();
                
                // Update status
                const statusEl = document.getElementById('calorie-status');
                if (consumed > target) {
                    statusEl.textContent = `Melebihi target sebesar ${consumed - target} kkal`;
                    statusEl.className = 'mt-2 text-sm text-red-600';
                } else if (consumed === target) {
                    statusEl.textContent = 'Target tercapai! 🎉';
                    statusEl.className = 'mt-2 text-sm text-green-600';
                } else {
                    statusEl.textContent = `Sisa ${remaining} kkal lagi`;
                    statusEl.className = 'mt-2 text-sm text-blue-600';
                }
            }

            // Edit profile modal functionality
            const editProfileBtn = document.getElementById('edit-profile-btn');
            const editProfileModal = document.getElementById('edit-profile-modal');
            const closeEditBtn = document.getElementById('close-edit');
            const editProfileForm = document.getElementById('edit-profile-form');

            editProfileBtn.addEventListener('click', () => {
                if (userProfile.targetCalories) {
                    document.getElementById('edit-weight').value = userProfile.weight;
                    document.getElementById('edit-height').value = userProfile.height;
                    document.getElementById('edit-calorie').value = userProfile.targetCalories;
                    document.getElementById('edit-goal').value = userProfile.goal;
                    editProfileModal.classList.remove('hidden');
                }
            });

            closeEditBtn.addEventListener('click', () => {
                editProfileModal.classList.add('hidden');
            });

            editProfileModal.addEventListener('click', (e) => {
                if (e.target === editProfileModal) {
                    editProfileModal.classList.add('hidden');
                }
            });

            editProfileForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const weight = parseFloat(document.getElementById('edit-weight').value);
                const height = parseFloat(document.getElementById('edit-height').value);
                const targetCalories = parseInt(document.getElementById('edit-calorie').value);
                const goal = document.getElementById('edit-goal').value;
                
                if (weight > 0 && height > 0 && targetCalories > 0) {
                    // Calculate new BMI
                    const heightInMeters = height / 100;
                    const bmi = weight / (heightInMeters * heightInMeters);
                    
                    // Set goal text
                    let goalText;
                    switch(goal) {
                        case 'lose': goalText = 'Menurunkan berat badan'; break;
                        case 'gain': goalText = 'Menaikkan berat badan'; break;
                        default: goalText = 'Menjaga berat badan';
                    }
                    
                    // Update profile
                    userProfile = {
                        weight,
                        height,
                        bmi,
                        targetCalories,
                        goal,
                        goalText
                    };
                    
                    updateDashboard();
                    editProfileModal.classList.add('hidden');
                    alert('Profil berhasil diperbarui!');
                } else {
                    alert('Mohon isi semua data dengan angka yang valid.');
                }
            });

            // Initialize everything
            initializeFoodDropdown();
            renderFoodLog();
        });