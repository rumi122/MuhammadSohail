document.addEventListener("UAGModalEditor",function(e){UAGBModal.init(".uagb-block-"+e.detail.block_id,!0)}),window.UAGBModal={init(e,t){const l=UAGBModal._getDocumentElement();var c=l.querySelectorAll(e);const r=l.getElementsByClassName("edit-site"),u=l.getElementsByClassName("block-editor-iframe__body");if(c?.length)for(const o of c){const s=o.querySelector(".uagb-modal-trigger"),a=o.dataset.overlayclick;if(s){s.style.pointerEvents="auto";const n=o?.querySelector(".uagb-modal-popup");if(n){t||l.body?.appendChild(n);const i=l.querySelector("body");if(i){s.addEventListener("click",function(e){e.preventDefault(),n.classList.contains("active")||(n.classList.add("active"),i.classList.contains("hide-scroll")||r?.length||u?.length||i.classList.contains("wp-admin")||i.classList.add("hide-scroll"))});const d=n.querySelector(e+" .uagb-modal-popup-close");d&&d.addEventListener("click",function(){n.classList.contains("active")&&n.classList.remove("active"),i.classList.contains("hide-scroll")&&UAGBModal.closeModalScrollCheck(i,l)}),"disable"!==a&&n.addEventListener("click",function(e){"enable"===a&&n.classList.contains("active")&&!n.querySelector(".uagb-modal-popup-wrap").contains(e.target)&&n.classList.remove("active"),i.classList.contains("hide-scroll")&&UAGBModal.closeModalScrollCheck(i,l)}),document.addEventListener("keyup",function(e){var t=o.dataset.escpress;27===e.keyCode&&"enable"===t&&(n.classList.contains("active")&&n.classList.remove("active"),i.classList.contains("hide-scroll")&&UAGBModal.closeModalScrollCheck(i,l))})}}}}},_getDocumentElement(){let e=document;var t=document.querySelectorAll('iframe[name="editor-canvas"]');return!t?.length||(t=t[0]?.contentWindow?.document||t[0]?.contentDocument)&&(e=t),e},closeModalScrollCheck(e,t){t.querySelectorAll(".uagb-modal-popup.active")?.length||e.classList.remove("hide-scroll")}};