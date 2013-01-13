# Troubleshooting

You have some problems. Look no further. Known problems and solutions are collected here so you don't have to figure them out again and again.

## Windows
Oh our beloved Windows. 

### Misc tips

* Use [chocolatey] for installation of tools. It helps. A lot.

### Specific problems

#### Chrome won't start. (Issues: [#202], [#74])

1. Set `CHROME_BIN` like this
   ```
   > export CHROME_BIN='C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
   ```
2. Add the `--start-maximized` flag to the chrome options. See [#269].
3. Increase the timeout from 5000ms to 10000ms. At 5000ms, timeouts occurred and the retry logic kicks in and eventually resolves after 2~3 tries.

## *nix
Even if you have a nice OS problems can still occur. 

### Misc tips

### Specific problems


[#202]: https://github.com/vojtajina/testacular/issues/202
[#269]: https://github.com/vojtajina/testacular/issues/202
[#74]: https://github.com/vojtajina/testacular/issues/74
[chocolatey]: (http://chocolatey.org/)
