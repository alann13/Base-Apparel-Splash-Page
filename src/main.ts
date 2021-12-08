import './style.css'
import { isEmailValid } from './utils/helpers'
import { errorMsgElement, form } from './utils/ui-selectors'

form?.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(form ?? undefined)
  const email = formData.get('email')?.toString()

  if (!isEmailValid(email)) {
    errorMsgElement?.classList.remove('hidden')
  } else {
    errorMsgElement?.classList.add('hidden')
    form?.reset()
  }
})
