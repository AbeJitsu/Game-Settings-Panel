// Game Settings Panel - JavaScript Functionality

const STORAGE_KEY = 'gameSettings';
const DEFAULT_SETTINGS = {
  'sound-effects': true,
  'background-music': true,
  'hard-mode': false,
  'haptic-feedback': false,
};

const KEYBOARD_SHORTCUTS = {
  's': 'sound-effects',
  'm': 'background-music',
  'h': 'hard-mode',
  'f': 'haptic-feedback',
  '?': 'help',
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  setupEventListeners();
});

// Load settings from localStorage
function loadSettings() {
  const savedSettings = localStorage.getItem(STORAGE_KEY);
  const settings = savedSettings ? JSON.parse(savedSettings) : DEFAULT_SETTINGS;

  Object.entries(settings).forEach(([id, checked]) => {
    const checkbox = document.getElementById(id);
    if (checkbox) {
      checkbox.checked = checked;
    }
  });
}

// Save settings to localStorage
function saveSettings() {
  const settings = {};
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    settings[checkbox.id] = checkbox.checked;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

// Setup event listeners for checkboxes and buttons
function setupEventListeners() {
  // Auto-save on checkbox change
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      saveSettings();
      showCheckboxFeedback(checkbox);
    });
  });

  // Save button handler
  const saveBtn = document.getElementById('save-settings-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', handleSaveClick);
  }

  // Reset button handler
  const resetBtn = document.getElementById('reset-settings-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', handleResetClick);
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', handleKeyboardShortcut);
}

// Handle save button click
function handleSaveClick() {
  saveSettings();
  showToast('Settings saved successfully! ✓', 'success');
}

// Handle reset button click
function handleResetClick() {
  const confirmed = confirm('Reset all settings to defaults?');
  if (confirmed) {
    Object.entries(DEFAULT_SETTINGS).forEach(([id, checked]) => {
      const checkbox = document.getElementById(id);
      if (checkbox) {
        checkbox.checked = checked;
      }
    });
    saveSettings();
    showToast('Settings reset to defaults', 'info');
  }
}

// Handle keyboard shortcuts
function handleKeyboardShortcut(event) {
  const key = event.key.toLowerCase();

  // Don't trigger if user is typing in an input field
  if (event.target.tagName === 'INPUT' && event.target.type !== 'checkbox') {
    return;
  }

  if (key === '?') {
    event.preventDefault();
    showKeyboardShortcutsHelp();
    return;
  }

  if (KEYBOARD_SHORTCUTS[key] && KEYBOARD_SHORTCUTS[key] !== 'help') {
    event.preventDefault();
    const checkboxId = KEYBOARD_SHORTCUTS[key];
    const checkbox = document.getElementById(checkboxId);
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
      checkbox.dispatchEvent(new Event('change', { bubbles: true }));
      showCheckboxFeedback(checkbox);
    }
  }
}

// Show visual feedback for checkbox toggle
function showCheckboxFeedback(checkbox) {
  checkbox.style.transform = 'scale(0.95)';
  setTimeout(() => {
    checkbox.style.transform = '';
  }, 150);
}

// Show toast notification
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  const toastContainer = document.getElementById('toast-container');
  if (toastContainer) {
    toastContainer.appendChild(toast);

    // Animate in
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

// Show keyboard shortcuts help
function showKeyboardShortcutsHelp() {
  const helpText = `
    Keyboard Shortcuts:
    S - Toggle Sound Effects
    M - Toggle Background Music
    H - Toggle Hard Mode
    F - Toggle Haptic Feedback
    ? - Show this help
  `;
  showToast('Press ? to show shortcuts', 'info');
  console.log(helpText);
}
