// ====== GLOBAL STATE ======
const foodDatabase = {}; // diisi dari KOMPUTASI.csv

let userProfile = {
  weight: null,
  height: null,
  bmi: null,
  targetCalories: null,
  goal: null,
  goalText: null,
};

let foodLog = []; // untuk diary makanan

// Fungsi bantu: konversi string → number aman
function parseNumber(value) {
  if (value === null || value === undefined) return 0;
  const num = parseFloat(String(value).replace(",", "."));
  return isNaN(num) ? 0 : num;
}

document.addEventListener("DOMContentLoaded", () => {
  // =====================================
  // NAVIGASI SECTION (Beranda/Kalkulator/Dashboard)
  // =====================================
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".nav-link-mobile");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  function showSection(id) {
    sections.forEach((section) => {
      if (section.id === id) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });

    window.scrollTo(0, 0);

    if (id === "dashboard") {
      updateDashboard();
    }
  }

  function updateActiveLink(targetId) {
    [...navLinks, ...mobileNavLinks].forEach((link) => {
      if (link.getAttribute("href") === `#${targetId}`) {
        link.classList.add("bg-teal-50", "text-teal-600");
      } else {
        link.classList.remove("bg-teal-50", "text-teal-600");
      }
    });
  }

  function navigate(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    history.pushState({}, "", `#${targetId}`);
    showSection(targetId);
    updateActiveLink(targetId);
  }

  navLinks.forEach((link) => link.addEventListener("click", navigate));

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navigate(e);
      mobileMenu.classList.add("hidden");
      const [iconOpen, iconClose] = mobileMenuButton.querySelectorAll("svg");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    });
  });

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const [iconOpen, iconClose] = mobileMenuButton.querySelectorAll("svg");
    iconOpen.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  });

  window.addEventListener("popstate", () => {
    const hash = window.location.hash.substring(1) || "beranda";
    showSection(hash);
    updateActiveLink(hash);
  });

  const initialHash = window.location.hash.substring(1) || "beranda";
  showSection(initialHash);
  updateActiveLink(initialHash);

  // =====================================
  // KALKULATOR KALORI & BMI
  // =====================================
  const calculatorForm = document.getElementById("calculator-form");

  if (calculatorForm) {
    calculatorForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(calculatorForm);
      const gender = formData.get("gender");
      const age = parseFloat(formData.get("age"));
      const weight = parseFloat(formData.get("weight"));
      const height = parseFloat(formData.get("height"));
      const activity = parseFloat(formData.get("activity"));
      const goal = formData.get("goal");

      if (
        isNaN(age) ||
        isNaN(weight) ||
        isNaN(height) ||
        age <= 0 ||
        weight <= 0 ||
        height <= 0
      ) {
        alert("Mohon isi semua data dengan angka yang valid.");
        return;
      }

      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);

      // Mifflin-St Jeor
      let bmr;
      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      const tdee = bmr * activity;

      let targetCalories;
      let goalDescription;
      let goalText;

      switch (goal) {
        case "lose":
          targetCalories = Math.round(tdee - 300);
          goalDescription = "Defisit kalori untuk menurunkan berat badan";
          goalText = "Menurunkan berat badan";
          break;
        case "gain":
          targetCalories = Math.round(tdee + 300);
          goalDescription = "Surplus kalori untuk menaikkan berat badan";
          goalText = "Menaikkan berat badan";
          break;
        default:
          targetCalories = Math.round(tdee);
          goalDescription = "Kalori untuk menjaga berat badan";
          goalText = "Menjaga berat badan";
      }

      window.calculationResults = {
        weight,
        height,
        bmi,
        targetCalories,
        goal,
        goalText,
        tdee: Math.round(tdee),
      };

      document.getElementById("bmi-result").textContent = bmi.toFixed(1);

      let bmiStatusText;
      if (bmi < 18.5) bmiStatusText = "Berat Badan Kurang";
      else if (bmi < 24.9) bmiStatusText = "Berat Badan Ideal";
      else if (bmi < 29.9) bmiStatusText = "Berat Badan Berlebih";
      else bmiStatusText = "Obesitas";

      document.getElementById("bmi-status").textContent = bmiStatusText;

      document.getElementById("target-calories").textContent = targetCalories;
      document.getElementById("goal-description").textContent = goalDescription;

      document.getElementById("tdee-maintain").textContent =
        Math.round(tdee) + " kkal/hari";
      document.getElementById("tdee-loss").textContent =
        Math.round(tdee - 300) + " kkal/hari";
      document.getElementById("tdee-gain").textContent =
        Math.round(tdee + 300) + " kkal/hari";

      document.getElementById("calculator-results").classList.remove("hidden");
    });
  }

  const saveProfileBtn = document.getElementById("save-profile-btn");
  if (saveProfileBtn) {
    saveProfileBtn.addEventListener("click", () => {
      if (window.calculationResults) {
        userProfile = { ...window.calculationResults };
        alert("Profil berhasil disimpan! Silakan cek dashboard Anda.");
        history.pushState({}, "", "#dashboard");
        showSection("dashboard");
        updateActiveLink("dashboard");
      } else {
        alert(
          "Silakan hitung kebutuhan kalori Anda terlebih dahulu sebelum menyimpan profil."
        );
      }
    });
  }

  // =====================================
  // TANGGAL HARI INI DI DASHBOARD
  // =====================================
  const currentDateEl = document.getElementById("current-date");
  if (currentDateEl) {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    currentDateEl.textContent = today.toLocaleDateString("id-ID", options);
  }

  // =====================================
  // PENCATAT MAKANAN + SEARCH + DROPDOWN
  // =====================================
  const foodSelect = document.getElementById("food-select");
  const foodSearchInput = document.getElementById("food-search");
  const foodWeightInput = document.getElementById("food-weight");
  const nutritionPreview = document.getElementById("nutrition-preview");

  // Load CSV → isi foodDatabase
  async function loadFoodDatabaseFromCsv() {
    try {
      const response = await fetch("data makanan.csv");
      if (!response.ok) {
        console.error("Gagal memuat data makanan.csv:", response.status);
        return;
      }

      const csvText = await response.text();
      const result = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
      });

      result.data.forEach((row) => {
        const rawName = row["nama_bahan"];
        if (!rawName) return;

        const name = String(rawName).replace(/\s+/g, " ").trim();
        if (!name) return;

        const calories = parseNumber(row["energi"]);
        const protein = parseNumber(row["protein"]);
        const carbs = parseNumber(row["kh"]);
        const fat = parseNumber(row["lemak"]);

        foodDatabase[name] = {
          calories,
          protein,
          carbs,
          fat,
          source: "TKPI 2017",
        };
      });

      console.log(
        "Food database terisi:",
        Object.keys(foodDatabase).length,
        "item"
      );

      // Isi dropdown awal (tanpa filter)
      initializeFoodDropdown("");
    } catch (err) {
      console.error("Error saat memuat data makanan.csv:", err);
    }
  }

  // Isi dropdown berdasarkan searchText
  function initializeFoodDropdown(searchText = "") {
    if (!foodSelect) return;

    foodSelect.innerHTML = "";

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "-- Pilih Makanan --";
    foodSelect.appendChild(placeholder);

    const lowerSearch = (searchText || "").toLowerCase().trim();

    const foods = Object.keys(foodDatabase)
      .filter((name) => {
        if (!lowerSearch) return true;
        return name.toLowerCase().includes(lowerSearch);
      })
      .sort();

    foods.forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      foodSelect.appendChild(option);
    });

    console.log(
      "Dropdown terisi. Filter =",
      searchText,
      "Total:",
      foods.length
    );
  }

  // Ketik di search → filter isi dropdown
  if (foodSearchInput) {
    foodSearchInput.addEventListener("input", () => {
      const keyword = foodSearchInput.value;
      initializeFoodDropdown(keyword);
      if (foodSelect) {
        foodSelect.value = "";
      }
      if (nutritionPreview) {
        nutritionPreview.classList.add("hidden");
      }
    });
  }

  // Ganti pilihan makanan di dropdown → tampilkan preview
  if (foodSelect) {
    foodSelect.addEventListener("change", () => {
      const selectedFood = foodSelect.value;
      if (!selectedFood || !foodDatabase[selectedFood]) {
        if (nutritionPreview) nutritionPreview.classList.add("hidden");
        return;
      }

      if (foodWeightInput && !foodWeightInput.value) {
        foodWeightInput.value = "100";
      }
      updateNutritionPreview();
      if (nutritionPreview) nutritionPreview.classList.remove("hidden");
    });
  }

  // Ganti berat → update preview
  if (foodWeightInput) {
    foodWeightInput.addEventListener("input", () => {
      const selectedFood = foodSelect ? foodSelect.value : "";
      if (selectedFood && foodDatabase[selectedFood]) {
        updateNutritionPreview();
      }
    });
  }

  function updateNutritionPreview() {
    if (!foodSelect || !foodWeightInput) return;

    const selectedFood = foodSelect.value;
    const weight = parseFloat(foodWeightInput.value) || 100;

    if (!selectedFood || !foodDatabase[selectedFood]) return;

    const food = foodDatabase[selectedFood];
    const multiplier = weight / 100;

    document.getElementById("preview-weight").textContent = weight;
    document.getElementById("preview-calories").textContent = Math.round(
      food.calories * multiplier
    );
    document.getElementById("preview-protein").textContent =
      (food.protein * multiplier).toFixed(1) + "g";
    document.getElementById("preview-carbs").textContent =
      (food.carbs * multiplier).toFixed(1) + "g";
    document.getElementById("preview-fat").textContent =
      (food.fat * multiplier).toFixed(1) + "g";

    const ds = document.getElementById("data-source");
    if (ds) {
      ds.textContent = `Sumber: ${food.source || "TKPI 2017"}`;
    }
  }

  // =====================================
  // FOOD LOG (DIARY MAKANAN)
  // =====================================
  const foodForm = document.getElementById("food-form");
  const foodListEl = document.getElementById("food-list");
  const emptyLogMessage = document.getElementById("empty-log-message");
  const caloriesConsumedEl = document.getElementById("calories-consumed");
  const caloriesTotalEl = document.getElementById("calories-total");

  function renderFoodLog() {
    if (!foodListEl || !emptyLogMessage) return;

    foodListEl.innerHTML = "";

    if (foodLog.length === 0) {
      emptyLogMessage.style.display = "block";
    } else {
      emptyLogMessage.style.display = "none";

      foodLog.forEach((food, index) => {
        const li = document.createElement("li");
        li.className = "bg-stone-50 p-3 rounded-md";
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
    const totalProteinEl = document.getElementById("total-protein");
    const totalCarbsEl = document.getElementById("total-carbs");
    const totalFatEl = document.getElementById("total-fat");
    if (!totalProteinEl || !totalCarbsEl || !totalFatEl) return;

    const totals = foodLog.reduce(
      (sum, food) => ({
        protein: sum.protein + food.protein,
        carbs: sum.carbs + food.carbs,
        fat: sum.fat + food.fat,
      }),
      { protein: 0, carbs: 0, fat: 0 }
    );

    totalProteinEl.textContent = totals.protein.toFixed(1) + "g";
    totalCarbsEl.textContent = totals.carbs.toFixed(1) + "g";
    totalFatEl.textContent = totals.fat.toFixed(1) + "g";
  }

  if (foodForm) {
    foodForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!foodSelect || !foodWeightInput) return;

      const selectedFood = foodSelect.value;
      const weight = parseFloat(foodWeightInput.value);

      if (selectedFood && weight > 0 && foodDatabase[selectedFood]) {
        const food = foodDatabase[selectedFood];
        const multiplier = weight / 100;

        const foodEntry = {
          name: selectedFood,
          weight,
          calories: Math.round(food.calories * multiplier),
          protein: parseFloat((food.protein * multiplier).toFixed(1)),
          carbs: parseFloat((food.carbs * multiplier).toFixed(1)),
          fat: parseFloat((food.fat * multiplier).toFixed(1)),
        };

        foodLog.push(foodEntry);
        renderFoodLog();

        foodSelect.value = "";
        foodWeightInput.value = "";
        if (nutritionPreview) nutritionPreview.classList.add("hidden");
      } else {
        alert("Mohon pilih makanan dan masukkan berat yang valid.");
      }
    });
  }

  if (foodListEl) {
    foodListEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-food-btn")) {
        const index = parseInt(e.target.dataset.index, 10);
        if (!isNaN(index)) {
          foodLog.splice(index, 1);
          renderFoodLog();
        }
      }
    });
  }

  // =====================================
  // CHART KALORI (Chart.js)
  // =====================================
  const calorieChartCtx = document.getElementById("calorie-chart");
  let calorieChart = null;

  // Warna status kalori
  const CALORIE_COLOR_YELLOW = "#FACC15"; // belum tercapai
  const CALORIE_COLOR_GREEN = "#14b8a6"; // tercapai (teal seperti di SS)
  const CALORIE_COLOR_RED = "#EF4444"; // berlebih
  const CALORIE_COLOR_BG = "#f1f5f9"; // cincin abu muda

  if (calorieChartCtx) {
    const ctx = calorieChartCtx.getContext("2d");
    const initialTarget = userProfile.targetCalories || 2000;

    calorieChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Terkonsumsi", "Sisa"],
        datasets: [
          {
            data: [0, initialTarget],
            backgroundColor: [CALORIE_COLOR_YELLOW, CALORIE_COLOR_BG],
            borderColor: [CALORIE_COLOR_YELLOW, CALORIE_COLOR_BG],
            borderWidth: 1,
            cutout: "80%",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
      },
    });
  }

  function updateCalorieChart() {
    if (!calorieChart || !caloriesConsumedEl || !caloriesTotalEl) return;

    const consumed = foodLog.reduce((sum, food) => sum + food.calories, 0);
    const target = userProfile.targetCalories || 2000;

    // jumlah yang ditampilkan di chart:
    const displayedConsumed = Math.min(consumed, target);
    const remaining = Math.max(0, target - consumed);

    caloriesConsumedEl.textContent = consumed;
    caloriesTotalEl.textContent = target;

    // tentukan warna progress berdasarkan status
    let progressColor;
    if (consumed < target) {
      progressColor = CALORIE_COLOR_YELLOW; // belum tercapai
    } else if (consumed === target) {
      progressColor = CALORIE_COLOR_GREEN; // pas tercapai
    } else {
      progressColor = CALORIE_COLOR_RED; // berlebih
    }

    const dataset = calorieChart.data.datasets[0];
    dataset.data[0] = displayedConsumed;
    dataset.data[1] = remaining;
    dataset.backgroundColor = [progressColor, CALORIE_COLOR_BG];
    dataset.borderColor = [progressColor, CALORIE_COLOR_BG];

    calorieChart.update();

    const statusEl = document.getElementById("calorie-status");
    if (!statusEl) return;

    if (consumed > target) {
      statusEl.textContent = `Melebihi target sebesar ${
        consumed - target
      } kkal`;
      statusEl.className = "mt-2 text-sm text-red-600";
    } else if (consumed === target) {
      statusEl.textContent = "Target tercapai! 🎉";
      statusEl.className = "mt-2 text-sm text-green-600";
    } else {
      statusEl.textContent = `Sisa ${remaining} kkal lagi`;
      statusEl.className = "mt-2 text-sm text-blue-600";
    }
  }

  // =====================================
  // DASHBOARD & PROFIL
  // =====================================
  function updateDashboard() {
    const noProfileWarning = document.getElementById("no-profile-warning");
    const dashboardContent = document.getElementById("dashboard-content");

    if (!noProfileWarning || !dashboardContent) return;

    const hasProfile = userProfile.targetCalories !== null;

    if (hasProfile) {
      noProfileWarning.style.display = "none";
      dashboardContent.style.display = "grid";

      const profileWeightEl = document.getElementById("profile-weight");
      const profileHeightEl = document.getElementById("profile-height");
      const profileBmiEl = document.getElementById("profile-bmi");
      const profileTargetEl = document.getElementById("profile-target");
      const profileGoalEl = document.getElementById("profile-goal");

      if (profileWeightEl)
        profileWeightEl.textContent = `${userProfile.weight} kg`;
      if (profileHeightEl)
        profileHeightEl.textContent = `${userProfile.height} cm`;
      if (profileBmiEl) profileBmiEl.textContent = userProfile.bmi.toFixed(1);
      if (profileTargetEl)
        profileTargetEl.textContent = `${userProfile.targetCalories} kkal/hari`;
      if (profileGoalEl) profileGoalEl.textContent = userProfile.goalText;

      if (caloriesTotalEl) {
        caloriesTotalEl.textContent = userProfile.targetCalories;
      }
      updateCalorieChart();
    } else {
      noProfileWarning.style.display = "block";
      dashboardContent.style.display = "none";
    }
  }

  // =====================================
  // EDIT PROFIL (MODAL)
  // =====================================
  const editProfileBtn = document.getElementById("edit-profile-btn");
  const editProfileModal = document.getElementById("edit-profile-modal");
  const closeEditBtn = document.getElementById("close-edit");
  const editProfileForm = document.getElementById("edit-profile-form");

  if (editProfileBtn && editProfileModal && editProfileForm && closeEditBtn) {
    editProfileBtn.addEventListener("click", () => {
      if (userProfile.targetCalories) {
        document.getElementById("edit-weight").value = userProfile.weight;
        document.getElementById("edit-height").value = userProfile.height;
        document.getElementById("edit-calorie").value =
          userProfile.targetCalories;
        document.getElementById("edit-goal").value = userProfile.goal;
        editProfileModal.classList.remove("hidden");
      } else {
        alert(
          "Profil belum ada. Silakan hitung dan simpan profil terlebih dahulu."
        );
      }
    });

    closeEditBtn.addEventListener("click", () => {
      editProfileModal.classList.add("hidden");
    });

    editProfileModal.addEventListener("click", (e) => {
      if (e.target === editProfileModal) {
        editProfileModal.classList.add("hidden");
      }
    });

    editProfileForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const weight = parseFloat(document.getElementById("edit-weight").value);
      const height = parseFloat(document.getElementById("edit-height").value);
      const targetCalories = parseInt(
        document.getElementById("edit-calorie").value,
        10
      );
      const goal = document.getElementById("edit-goal").value;

      if (weight > 0 && height > 0 && targetCalories > 0) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        let goalText;
        switch (goal) {
          case "lose":
            goalText = "Menurunkan berat badan";
            break;
          case "gain":
            goalText = "Menaikkan berat badan";
            break;
          default:
            goalText = "Menjaga berat badan";
        }

        userProfile = {
          weight,
          height,
          bmi,
          targetCalories,
          goal,
          goalText,
        };

        updateDashboard();
        editProfileModal.classList.add("hidden");
        alert("Profil berhasil diperbarui!");
      } else {
        alert("Mohon isi semua data dengan angka yang valid.");
      }
    });
  }

  // =====================================
  // INISIALISASI AWAL
  // =====================================
  loadFoodDatabaseFromCsv();
  renderFoodLog();
  updateDashboard();
});
