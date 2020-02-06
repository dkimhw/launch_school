

### Locale Part 2

Question:

* Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:


Answer:

```javascript
function extractRegion(locale) {
    return locale.split('_')[1].split('.')[0];
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'
```