"use strict";function anchoreDropdown(){document.getElementById("dropdownlist").classList.toggle("show")}function questDropdown(){document.getElementById("quest-dropdownlist").classList.toggle("show")}function animationDropdown(){document.getElementById("animation-dropdownlist").classList.toggle("show")}!function(){var t=document.querySelectorAll(".popup-btn"),o=function(){document.body.style.paddingRight=window.innerWidth-document.body.clientWidth+"px",document.body.classList.add("lock")};t.length&&t.forEach((function(t){t.addEventListener("click",(function(e){console.log();var n=t.querySelectorAll(".popup__close"),s=t.querySelector(".popup-text"),c=t.querySelector(".popup-image");n.length&&n.forEach((function(t){t.addEventListener("click",(function(){s.classList.remove("open"),c.classList.remove("open"),document.body.classList.remove("lock"),document.body.style.paddingRight=0}))})),e.target.classList.contains("popup-btn__suit")&&(c.classList.add("open"),o()),e.target.classList.contains("popup-btn__actor")&&(s.classList.add("open"),o())}))}))}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZiYmlyc2RheS5qcyJdLCJuYW1lcyI6WyJhbmNob3JlRHJvcGRvd24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicXVlc3REcm9wZG93biIsImFuaW1hdGlvbkRyb3Bkb3duIiwicG9wdXBQYXJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm9zY3JvbGwiLCJib2R5Iiwic3R5bGUiLCJwYWRkaW5nUmlnaHQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJhZGQiLCJsZW5ndGgiLCJmb3JFYWNoIiwicGFyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJ0ZXh0IiwicXVlcnlTZWxlY3RvciIsImltZyIsImMiLCJyZW1vdmUiLCJ0YXJnZXQiLCJjb250YWlucyJdLCJtYXBwaW5ncyI6IkFBQUEsYUFDQSxTQUFTQSxrQkFDUEMsU0FBU0MsZUFBZSxnQkFBZ0JDLFVBQVVDLE9BQU8sUUFHM0QsU0FBU0MsZ0JBQ1BKLFNBQVNDLGVBQWUsc0JBQXNCQyxVQUFVQyxPQUFPLFFBR2pFLFNBQVNFLG9CQUNQTCxTQUFTQyxlQUFlLDBCQUEwQkMsVUFBVUMsT0FBTyxTQUlwRSxXQUVHLElBQU1HLEVBQWNOLFNBQVNPLGlCQUFpQixjQUNsQ0MsRUFBUyxXQUNmUixTQUFTUyxLQUFLQyxNQUFNQyxhQUFhQyxPQUFPQyxXQUFXYixTQUFTUyxLQUFLSyxZQUFZLEtBQzdFZCxTQUFTUyxLQUFLUCxVQUFVYSxJQUFJLFNBTWxDVCxFQUFZVSxRQUFRVixFQUFZVyxTQUFRLFNBQUFDLEdBQ3BDQSxFQUFPQyxpQkFBaUIsU0FBVSxTQUFDQyxHQUMvQkMsUUFBUUMsTUFDUixJQUFNQyxFQUFTTCxFQUFPWCxpQkFBaUIsaUJBQ2pDaUIsRUFBS04sRUFBT08sY0FBYyxlQUMxQkMsRUFBSVIsRUFBT08sY0FBYyxnQkFDL0JGLEVBQU1QLFFBQVFPLEVBQU1OLFNBQVEsU0FBQVUsR0FDdkJBLEVBQUVSLGlCQUFpQixTQUFRLFdBQzVCSyxFQUFLdEIsVUFBVTBCLE9BQU8sUUFDdEJGLEVBQUl4QixVQUFVMEIsT0FBTyxRQVp6QjVCLFNBQVNTLEtBQUtQLFVBQVUwQixPQUFPLFFBQy9CNUIsU0FBU1MsS0FBS0MsTUFBTUMsYUFBYyxRQWVoQ1MsRUFBRVMsT0FBTzNCLFVBQVU0QixTQUFTLHFCQUFxQkosRUFBSXhCLFVBQVVhLElBQUksUUFBUVAsS0FDN0VZLEVBQUVTLE9BQU8zQixVQUFVNEIsU0FBUyxzQkFBc0JOLEVBQUt0QixVQUFVYSxJQUFJLFFBQVFQLFdBekJ4RiIsImZpbGUiOiJmYmJpcnNkYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIiBcclxuZnVuY3Rpb24gYW5jaG9yZURyb3Bkb3duKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25saXN0XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG59O1xyXG4gIFxyXG5mdW5jdGlvbiBxdWVzdERyb3Bkb3duKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3QtZHJvcGRvd25saXN0XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG59O1xyXG4gIFxyXG5mdW5jdGlvbiBhbmltYXRpb25Ecm9wZG93bigpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW1hdGlvbi1kcm9wZG93bmxpc3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbn07XHJcblxyXG4gXHJcbihmdW5jdGlvbigpe1xyXG4gIFxyXG4gICAgY29uc3QgcG9wdXBQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAtYnRuJyk7ICBcclxuICAgICAgICBjb25zdCAgIG5vc2Nyb2xsPSgpPT57IFxyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9d2luZG93LmlubmVyV2lkdGgtZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCsncHgnO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNjcm9sbEFnYWluPSgpPT57XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodD0gMDtcclxuICAgICAgICB9XHJcbiAgICBwb3B1cFBhcmVudC5sZW5ndGgmJnBvcHVwUGFyZW50LmZvckVhY2gocGFyZW50PT57XHJcbiAgICAgICAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsIChlKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygpO1xyXG4gICAgICAgICAgICBjb25zdCBjbG9zZSAgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19jbG9zZScpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0PXBhcmVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtdGV4dCcpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWc9cGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1pbWFnZScpO1xyXG4gICAgICAgICAgICBjbG9zZS5sZW5ndGgmJmNsb3NlLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgICAgIHRleHQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpOyBcclxuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7IFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQWdhaW4oKVxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgfSk7ICBcclxuICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwLWJ0bl9fc3VpdCcpJiYoaW1nLmNsYXNzTGlzdC5hZGQoJ29wZW4nKSxub3Njcm9sbCgpKTsgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXAtYnRuX19hY3RvcicpJiYodGV4dC5jbGFzc0xpc3QuYWRkKCdvcGVuJyksbm9zY3JvbGwoKSk7IFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuIFxyXG59KCkpO1xyXG5cclxuIl19
