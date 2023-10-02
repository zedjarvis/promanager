
// Add class .vss-movable to v-card-title to make dialogue movable

export function useMovableDialogs() {
  console.log("movable dialog active")
  const d: any = {}
  const isMovable = (targ: Element) => {
    return targ.classList?.contains("vss-movable")
  }
  document.addEventListener("mousedown", (e: any) => {
    e.preventDefault()
    const closestDialog = e.target.closest(".v-overlay__content")
    const title = closestDialog?.querySelector(".v-card-title")
    if (e.button === 0 && closestDialog != null && (isMovable(e.target)) || isMovable(e.target.parentNode)) {
      d.el = closestDialog // movable element
      d.handle = title // enable dlg to be moved beyond bottom
      d.mouseStartX = e.clientX
      d.mouseStartY = e.clientY
      d.elStartX = d.el.getBoundingClientRect().left
      d.elStartY = d.el.getBoundingClientRect().top
      d.el.style.position = "fixed"
      d.el.style.margin = 0
      d.oldTransition = d.el.style.transition
      d.el.style.transition = "none"
    }
  })

  document.addEventListener("mousemove", (e: any) => {
    if (d.el === undefined) return
    d.el.style.left = Math.min(Math.max(d.elStartX + e.clientX - d.mouseStartX, 0), window.innerWidth - d.el.getBoundingClientRect().width) + "px"
    d.el.style.top = Math.min(Math.max(d.elStartY + e.clientY - d.mouseStartY, 0), window.innerHeight - d.handle.getBoundingClientRect().height) + "px"
  })

  document.addEventListener("mouseup", () => {
    if (d.el === undefined) return
    d.el.style.transition = d.oldTransition
    d.el = undefined
  })
}

