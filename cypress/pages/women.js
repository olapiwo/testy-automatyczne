class Women {
    get sizeL(){
        return cy.get("#layered_id_attribute_group_3")
    }
    checkSizeL () {
        this.sizeL.check()
    }
    get allType(){
        return cy.get("#ul_layered_category_0 input")
    }
    checkAllType () {
        this.allType.check()
    }
}

export default new Women()