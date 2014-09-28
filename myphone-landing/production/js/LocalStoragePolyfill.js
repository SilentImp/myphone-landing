if (!window.localStorage) {
  Object.defineProperty(window, "localStorage", new (function() {
    var aKeys = [],
      oStorage = {};
    Object.defineProperty(oStorage, "getItem", {
      value: function(sKey) {
        return sKey ? this[sKey] : null;
      },
      writable: false,
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "key", {
      value: function(nKeyId) {
        return aKeys[nKeyId];
      },
      writable: false,
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "setItem", {
      value: function(sKey, sValue) {
        if (!sKey) {
          return;
        }
        document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
      },
      writable: false,
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "length", {
      get: function() {
        return aKeys.length;
      },
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "removeItem", {
      value: function(sKey) {
        if (!sKey) {
          return;
        }
        document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      },
      writable: false,
      configurable: false,
      enumerable: false
    });
    this.get = function() {
      var iThisIndx;
      for (var sKey in oStorage) {
        iThisIndx = aKeys.indexOf(sKey);
        if (iThisIndx === -1) {
          oStorage.setItem(sKey, oStorage[sKey]);
        } else {
          aKeys.splice(iThisIndx, 1);
        }
        delete oStorage[sKey];
      }
      for (aKeys; aKeys.length > 0; aKeys.splice(0, 1)) {
        oStorage.removeItem(aKeys[0]);
      }
      for (var aCouple, iKey, nIdx = 0, aCouples = document.cookie.split(/\s*;\s*/); nIdx < aCouples.length; nIdx++) {
        aCouple = aCouples[nIdx].split(/\s*=\s*/);
        if (aCouple.length > 1) {
          oStorage[iKey = unescape(aCouple[0])] = unescape(aCouple[1]);
          aKeys.push(iKey);
        }
      }
      return oStorage;
    };
    this.configurable = false;
    this.enumerable = true;
  })());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYWxTdG9yYWdlUG9seWZpbGwuanMiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJMb2NhbFN0b3JhZ2VQb2x5ZmlsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoIXdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgXCJsb2NhbFN0b3JhZ2VcIiwgbmV3IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFLZXlzID0gW10sIG9TdG9yYWdlID0ge307XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9TdG9yYWdlLCBcImdldEl0ZW1cIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIChzS2V5KSB7IHJldHVybiBzS2V5ID8gdGhpc1tzS2V5XSA6IG51bGw7IH0sXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob1N0b3JhZ2UsIFwia2V5XCIsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiAobktleUlkKSB7IHJldHVybiBhS2V5c1tuS2V5SWRdOyB9LFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9TdG9yYWdlLCBcInNldEl0ZW1cIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIChzS2V5LCBzVmFsdWUpIHtcbiAgICAgICAgaWYoIXNLZXkpIHsgcmV0dXJuOyB9XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGVzY2FwZShzS2V5KSArIFwiPVwiICsgZXNjYXBlKHNWYWx1ZSkgKyBcIjsgZXhwaXJlcz1UdWUsIDE5IEphbiAyMDM4IDAzOjE0OjA3IEdNVDsgcGF0aD0vXCI7XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9TdG9yYWdlLCBcImxlbmd0aFwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFLZXlzLmxlbmd0aDsgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvU3RvcmFnZSwgXCJyZW1vdmVJdGVtXCIsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiAoc0tleSkge1xuICAgICAgICBpZighc0tleSkgeyByZXR1cm47IH1cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gZXNjYXBlKHNLZXkpICsgXCI9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UOyBwYXRoPS9cIjtcbiAgICAgIH0sXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpVGhpc0luZHg7XG4gICAgICBmb3IgKHZhciBzS2V5IGluIG9TdG9yYWdlKSB7XG4gICAgICAgIGlUaGlzSW5keCA9IGFLZXlzLmluZGV4T2Yoc0tleSk7XG4gICAgICAgIGlmIChpVGhpc0luZHggPT09IC0xKSB7IG9TdG9yYWdlLnNldEl0ZW0oc0tleSwgb1N0b3JhZ2Vbc0tleV0pOyB9XG4gICAgICAgIGVsc2UgeyBhS2V5cy5zcGxpY2UoaVRoaXNJbmR4LCAxKTsgfVxuICAgICAgICBkZWxldGUgb1N0b3JhZ2Vbc0tleV07XG4gICAgICB9XG4gICAgICBmb3IgKGFLZXlzOyBhS2V5cy5sZW5ndGggPiAwOyBhS2V5cy5zcGxpY2UoMCwgMSkpIHsgb1N0b3JhZ2UucmVtb3ZlSXRlbShhS2V5c1swXSk7IH1cbiAgICAgIGZvciAodmFyIGFDb3VwbGUsIGlLZXksIG5JZHggPSAwLCBhQ291cGxlcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgvXFxzKjtcXHMqLyk7IG5JZHggPCBhQ291cGxlcy5sZW5ndGg7IG5JZHgrKykge1xuICAgICAgICBhQ291cGxlID0gYUNvdXBsZXNbbklkeF0uc3BsaXQoL1xccyo9XFxzKi8pO1xuICAgICAgICBpZiAoYUNvdXBsZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgb1N0b3JhZ2VbaUtleSA9IHVuZXNjYXBlKGFDb3VwbGVbMF0pXSA9IHVuZXNjYXBlKGFDb3VwbGVbMV0pO1xuICAgICAgICAgIGFLZXlzLnB1c2goaUtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvU3RvcmFnZTtcbiAgICB9O1xuICAgIHRoaXMuY29uZmlndXJhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgfSkoKSk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9