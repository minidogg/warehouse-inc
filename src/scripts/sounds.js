document.getElementById('SugarCollectSoundButton').addEventListener('click', function() {
    const soundFiles = [
      'SugarAsian.mp3',
      'SugerHighPitched.mp3',
      'AnoyingSugar.mp3',
    ];
    const randomSound = soundFiles[Math.floor(Math.random() * soundFiles.length)];

    const audio = new Audio(`./sfx/${randomSound}`);

    audio.play();
  });
  