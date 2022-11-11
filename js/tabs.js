window.addEventListener("DOMContentLoaded", () =>{

    class Tabs {
        constructor(selector, control, content, active) {
            this.tab = document.querySelector(selector)
            this.tabControl = this.tab.querySelectorAll(control)
            this.tabContent = this.tab.querySelectorAll(content)
            this.active = active
            this.event()
        }
        event() {
            this.hideTabsContent()
            this.showTabsContent()
            this.checkOffset()
            this.toggleTab()
            addEventListener('resize', (e) => {
                this.checkOffset()
            })
        }

        toggleTab() {
            this.tabControl.forEach((item, i) => {
                item.addEventListener('click', () => {
                    this.hideTabsContent()
                    this.showTabsContent(i)
                })
            })
        }
        checkOffset() {
            let offset = 0
            this.tabControl.forEach((item, i) => {
                if (window.innerWidth > 768) {
                    item.style.left = `${offset}px`
                    offset += this.tabControl[i].offsetWidth
                } else { item.style.left = "0px" }
            })
        }
        showTabsContent(i = 0) {
            this.tabContent[i].style.display = "block"
            this.tabControl[i].classList.add(this.active)
        }
        hideTabsContent() {
            this.tabContent.forEach(item => {
                item.style.display = "none"
            })
            this.tabControl.forEach(item => {
                item.classList.remove(this.active)
            })
        }
    }


    const tabs1 = new Tabs('.product', '.product-tab_btn', '.product-content_item', 'active-tab_btn')

    class Forms {
        constructor(selector) {
            this.form = document.querySelector(selector)
            this.input = this.form.querySelectorAll('input')
            this.event()
        }
        event() {
            this.form.addEventListener('submit' , (e) => {
                let emptyInputs = Array.from(this.input).filter(input => input.value === '')
                if (emptyInputs.length !== 0) {
                    e.preventDefault()
                    this.error()
                }

            })
        }
        error() {
            this.input.forEach(function (input) {
                if (input.value === '') {
                    input.classList.add('input-error')
                } else {
                    input.classList.remove('input-error')
                }
            })
        }

    }

    const form_1 = new Forms('#form_1')
    const form_2 = new Forms('#form_2')

});