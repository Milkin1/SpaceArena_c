"use strict";var body=document.querySelector("body"),html=document.querySelector("html"),header=document.querySelector(".header"),navBtn=document.querySelector(".nav__btn");function anchoreDropdown(){document.getElementById("dropdownlist").classList.toggle("show")}function questDropdown(){document.getElementById("quest-dropdownlist").classList.toggle("show")}function animationDropdown(){document.getElementById("animation-dropdownlist").classList.toggle("show")}window.onclick=function(t){if(!t.target.matches(".dropdown__link")){var o,n=document.getElementsByClassName("content");for(o=0;o<n.length;o++){var e=n[o];e.classList.contains("show")&&e.classList.remove("show")}}},window.onclick=function(t){if(!t.target.matches(".quest-dropdown__link")){var o,n=document.getElementsByClassName("quest-dropdown-content");for(o=0;o<n.length;o++){var e=n[o];e.classList.contains("show")&&e.classList.remove("show")}}},window.onclick=function(t){if(!t.target.matches(".animation-dropdown__link")){var o,n=document.getElementsByClassName("animation-dropdown-content");for(o=0;o<n.length;o++){var e=n[o];e.classList.contains("show")&&e.classList.remove("show")}}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImh0bWwiLCJoZWFkZXIiLCJuYXZCdG4iLCJhbmNob3JlRHJvcGRvd24iLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInF1ZXN0RHJvcGRvd24iLCJhbmltYXRpb25Ecm9wZG93biIsIndpbmRvdyIsIm9uY2xpY2siLCJldmVudCIsInRhcmdldCIsIm1hdGNoZXMiLCJpIiwiZHJvcGRvd25zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsIm9wZW5Ecm9wZG93biIsImNvbnRhaW5zIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQSxhQUNBLElBQU1BLEtBQU9DLFNBQVNDLGNBQWMsUUFDOUJDLEtBQU9GLFNBQVNDLGNBQWMsUUFDOUJFLE9BQVNILFNBQVNDLGNBQWMsV0FDaENHLE9BQVNKLFNBQVNDLGNBQWMsYUFJdEMsU0FBU0ksa0JBQ1BMLFNBQVNNLGVBQWUsZ0JBQWdCQyxVQUFVQyxPQUFPLFFBbUIzRCxTQUFTQyxnQkFDUFQsU0FBU00sZUFBZSxzQkFBc0JDLFVBQVVDLE9BQU8sUUFpQmpFLFNBQVNFLG9CQUNQVixTQUFTTSxlQUFlLDBCQUEwQkMsVUFBVUMsT0FBTyxRQWxDckVHLE9BQU9DLFFBQVUsU0FBVUMsR0FDekIsSUFBS0EsRUFBTUMsT0FBT0MsUUFBUSxtQkFBb0IsQ0FDNUMsSUFDSUMsRUFEQUMsRUFBWWpCLFNBQVNrQix1QkFBdUIsV0FFaEQsSUFBS0YsRUFBSSxFQUFHQSxFQUFJQyxFQUFVRSxPQUFRSCxJQUFLLENBQ3JDLElBQUlJLEVBQWVILEVBQVVELEdBQ3pCSSxFQUFhYixVQUFVYyxTQUFTLFNBQ2xDRCxFQUFhYixVQUFVZSxPQUFPLFdBYXRDWCxPQUFPQyxRQUFVLFNBQVVDLEdBQ3pCLElBQUtBLEVBQU1DLE9BQU9DLFFBQVEseUJBQTBCLENBQ2xELElBQ0lDLEVBREFDLEVBQVlqQixTQUFTa0IsdUJBQXVCLDBCQUVoRCxJQUFLRixFQUFJLEVBQUdBLEVBQUlDLEVBQVVFLE9BQVFILElBQUssQ0FDckMsSUFBSUksRUFBZUgsRUFBVUQsR0FDekJJLEVBQWFiLFVBQVVjLFNBQVMsU0FDbENELEVBQWFiLFVBQVVlLE9BQU8sV0FXdENYLE9BQU9DLFFBQVUsU0FBVUMsR0FDekIsSUFBS0EsRUFBTUMsT0FBT0MsUUFBUSw2QkFBOEIsQ0FDdEQsSUFDSUMsRUFEQUMsRUFBWWpCLFNBQVNrQix1QkFBdUIsOEJBRWhELElBQUtGLEVBQUksRUFBR0EsRUFBSUMsRUFBVUUsT0FBUUgsSUFBSyxDQUNyQyxJQUFJSSxFQUFlSCxFQUFVRCxHQUN6QkksRUFBYWIsVUFBVWMsU0FBUyxTQUNsQ0QsRUFBYWIsVUFBVWUsT0FBTyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG5jb25zdCBuYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fYnRuXCIpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhbmNob3JlRHJvcGRvd24oKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bmxpc3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbn1cclxuXHJcbi8vINCX0LDQutGA0L7QudGC0LUg0LLRi9C/0LDQtNCw0Y7RidC10LUg0LzQtdC90Y4sINC10YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRidC10LvQutCw0LXRgiDQt9CwINC10LPQviDQv9GA0LXQtNC10LvQsNC80Lhcclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZHJvcGRvd25fX2xpbmsnKSkge1xyXG4gICAgdmFyIGRyb3Bkb3ducyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250ZW50XCIpO1xyXG4gICAgdmFyIGk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZHJvcGRvd25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNbaV07XHJcbiAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICBvcGVuRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHF1ZXN0RHJvcGRvd24oKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdC1kcm9wZG93bmxpc3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbn1cclxuXHJcbi8vINCX0LDQutGA0L7QudGC0LUg0LLRi9C/0LDQtNCw0Y7RidC10LUg0LzQtdC90Y4sINC10YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRidC10LvQutCw0LXRgiDQt9CwINC10LPQviDQv9GA0LXQtNC10LvQsNC80Lhcclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcucXVlc3QtZHJvcGRvd25fX2xpbmsnKSkge1xyXG4gICAgdmFyIGRyb3Bkb3ducyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJxdWVzdC1kcm9wZG93bi1jb250ZW50XCIpO1xyXG4gICAgdmFyIGk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZHJvcGRvd25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNbaV07XHJcbiAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICBvcGVuRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRpb25Ecm9wZG93bigpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW1hdGlvbi1kcm9wZG93bmxpc3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbn1cclxuXHJcbi8vINCX0LDQutGA0L7QudGC0LUg0LLRi9C/0LDQtNCw0Y7RidC10LUg0LzQtdC90Y4sINC10YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRidC10LvQutCw0LXRgiDQt9CwINC10LPQviDQv9GA0LXQtNC10LvQsNC80Lhcclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuYW5pbWF0aW9uLWRyb3Bkb3duX19saW5rJykpIHtcclxuICAgIHZhciBkcm9wZG93bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYW5pbWF0aW9uLWRyb3Bkb3duLWNvbnRlbnRcIik7XHJcbiAgICB2YXIgaTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBkcm9wZG93bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIG9wZW5Ecm9wZG93biA9IGRyb3Bkb3duc1tpXTtcclxuICAgICAgaWYgKG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xyXG4gICAgICAgIG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0=
