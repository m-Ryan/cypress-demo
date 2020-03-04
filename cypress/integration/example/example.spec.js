/// <reference types="Cypress" />
import {Given, Then} from 'cypress-cucumber-preprocessor/steps';

Then('I login', () => {
    cy.login();
});

Then('I visit admin', title => {
    cy.visit('http://www.maocanhua.cn/admin')
});

Then('I should see page normal',() => {
    cy.title().should('include', '管理后台'); 
    cy.get('a').should('contain', '个人中心')
});
