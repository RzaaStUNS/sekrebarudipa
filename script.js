function hideSplash() {
    document.getElementById('splashScreen').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('splashScreen').style.display = 'none';
        document.getElementById('mainContent').classList.remove('hidden');
    }, 800);
}
