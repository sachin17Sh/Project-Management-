import Button from "./Buttons"
import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} className="bg-white rounded-md shadow-lg p-5">
        {children}
        <form method="dialog" className="mt-4 text-right">
          <Button>
            {buttonCaption}
          </Button>
        </form>
      </dialog>, document.getElementById("modal-root")
    )
})

export default Modal