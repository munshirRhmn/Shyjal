document.addEventListener('DOMContentLoaded', function () {
    const theme = localStorage.getItem('theme');

    if (!theme || theme === 'light') {
        setTheme('light');
    } else {
        setTheme(theme);
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const theme = localStorage.getItem('theme');

    if (!theme || theme === 'light') {
      setTheme('light');
    } else {
      setTheme(theme);
    }
  });

  function setTheme(theme) {
    const html = document.querySelector('html');
    localStorage.setItem('theme', theme);

    if (theme === 'light') {
      if (html.classList.contains('dark')) {
        document.querySelector('html').classList.remove('dark');
      }

      document.querySelector('.theme-icon.light').style.display = 'none';
      document.querySelector('.theme-icon.dark').style.display = 'block';
    } else {
      if (!html.classList.contains('dark')) {
        document.querySelector('html').classList.add('dark');
      }

      document.querySelector('.theme-icon.dark').style.display = 'none';
      document.querySelector('.theme-icon.light').style.display = 'block';
    }
  }

  function toggleTheme() {
    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

function setTheme(theme) {
    const html = document.querySelector('html');
    localStorage.setItem('theme', theme);

    if (theme === 'light') {
        if (html.classList.contains('dark')) {
            document.querySelector('html').classList.remove('dark');
        }

        document.querySelector('.theme-icon.light').style.display = 'none';
        document.querySelector('.theme-icon.dark').style.display = 'block';
    } else {
        if (!html.classList.contains('dark')) {
            document.querySelector('html').classList.add('dark');
        }

        document.querySelector('.theme-icon.dark').style.display = 'none';
        document.querySelector('.theme-icon.light').style.display = 'block';
    }
}

function toggleTheme() {
    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}





document.addEventListener('DOMContentLoaded', function () {
    const theme = localStorage.getItem('theme');

    if (!theme || theme === 'light') {
        setTheme('light');
    } else {
        setTheme(theme);
    }
});

function setTheme(theme) {
    const html = document.querySelector('html');
    localStorage.setItem('theme', theme);

    if (theme === 'light') {
        if (html.classList.contains('dark')) {
            document.querySelector('html').classList.remove('dark');
        }

        document.querySelector('.theme-icon.light').style.display = 'none';
        document.querySelector('.theme-icon.dark').style.display = 'block';
    } else {
        if (!html.classList.contains('dark')) {
            document.querySelector('html').classList.add('dark');
        }

        document.querySelector('.theme-icon.dark').style.display = 'none';
        document.querySelector('.theme-icon.light').style.display = 'block';
    }
}

function toggleTheme() {
    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}





document.addEventListener('DOMContentLoaded', function () {
    const theme = localStorage.getItem('theme');

    if (!theme || theme === 'light') {
        setTheme('light');
    } else {
        setTheme(theme);
    }
});

function setTheme(theme) {
    const html = document.querySelector('html');
    localStorage.setItem('theme', theme);

    if (theme === 'light') {
        if (html.classList.contains('dark')) {
            document.querySelector('html').classList.remove('dark');
        }

        document.querySelector('.theme-icon.light').style.display = 'none';
        document.querySelector('.theme-icon.dark').style.display = 'block';
    } else {
        if (!html.classList.contains('dark')) {
            document.querySelector('html').classList.add('dark');
        }

        document.querySelector('.theme-icon.dark').style.display = 'none';
        document.querySelector('.theme-icon.light').style.display = 'block';
    }
}

function toggleTheme() {
    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}





///////////////////////////////////////////////////

