# 20 React: React Portfolio


## exper-waffle Portfolio2.0

---

### Contents 

---

1. Objectives
2. About
4. Links
5. Assignment details & grading rubric (*ignore me*)

<br>
<br>

### Objectives ###

---

<br>

1. WHEN I load the portfolio THEN I am presented with a page containing a header, a section for content, and a footer
2. WHEN I view the header THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
3. WHEN I view the navigation titles THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
4. WHEN I click on a navigation title THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
5. WHEN I load the portfolio the first time THEN the About Me title and section are selected by default
6. WHEN I am presented with the About Me section THEN I see a recent photo or avatar of the developer and a short bio about them WHEN I am presented with the Portfolio section THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
7. WHEN I am presented with the Contact section THEN I see a contact form with fields for a name, an email address, and a message
8. WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required
9. WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address
10. WHEN I am presented with the Resume section THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
11. WHEN I view the footer THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)


<br>
<br>

### About ###

---

<br>

1. WHEN I load the portfolio THEN I am presented with a page containing a header, a section for content, and a footer.
    > Page is structured with a header with my name, a body for content to be loaded and a footer.

2. WHEN I view the header THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio.
    > The header has my name and a navbar for page navigation included.

3. WHEN I view the navigation titles THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted.
    > The Navbar has sections for About, Projects, Contact, and includes a drop down menu for a resume, links to social media / Github profile, and a surprise.

4. WHEN I click on a navigation title THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted.
    > When the user clicks on About, Projects, and Contact the corresponding sections are rendered in the page with no refresh of the page.

5. WHEN I load the portfolio the first time THEN the About Me title and section are selected by default.
    > About section is defaulted to render the first time a user loads the page. Their last navigated section is placed into local storage so when the user navigates back to the page, the section they last viewed is automatically rendered.

6. WHEN I am presented with the About Me section THEN I see a recent photo or avatar of the developer and a short bio about them WHEN I am presented with the Portfolio section THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories.
    > The About section includes a photo, and a short blurb about who I am and my professional goals. The Projects section includes cards for 6 projects. When the card is hovered it flips over to reveal the project title, a project tagline, icons demonstrating the technologies used and links to the live application (if available) and github repo.

7. WHEN I am presented with the Contact section THEN I see a contact form with fields for a name, an email address, and a message.
    > The contact section loads appropriately however as of now is nonfunctional.

8. WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required.
    > Elected not to complete from a design perspective.

9. WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address.
    > User must enter valid email address otherwise they are alerted with a helper notification.

10. WHEN I am presented with the Resume section THEN I see a link to a downloadable resume and a list of the developer’s proficiencies.
    > The link to resume in the navbar results in a downloaded copy of my current resume.

11. WHEN I view the footer THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter).
    > Footer does not contain these items, from a design perspective I opted to place links in the navbar. Also, a third platform is not included as I do not have a social media presence on other platforms outside of LinkedIn and GitHub.


<br>
<br>

### Screenshots ###

---

1. ![myscreenshot](./assets/Screenshot%202022-11-19%20133440.png)

<br>

About

<br>

2. ![myscreenshot](./Assets/screenshot2.png)

<br>

Projects

<br>

3. ![myscreenshot](./Assets/screenshot3.png)

<br>

Contact

<br>

3. ![myscreenshot](./Assets/screenshot4.png)

<br>

Nav menu dropdown

<br>


### Links ###

---

<br>


Link to Github repo: https://github.com/JDReeves86/Portfolio2.0

Link to live page: https://still-savannah-19042.herokuapp.com/
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

---

---

## Assignment Details & Grading Rubric ##

---

---

<br>
<br>

# 20 React: React Portfolio

## Your Task

Being a web developer means being part of a community. You’ll need a place not only to share your projects while you're applying for jobs or working as a freelancer but also to share your work with other developers and collaborate on projects.

Your task is to create a portfolio using your new React skills, which will help set you apart from other developers whose portfolios don’t use the latest technologies. 

You’ll deploy this application to GitHub Pages. Follow the instructions in the Git Guide or consult the [Create React App Docs on GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages) to create a build that you can deploy.

**Important**: Be sure to push your codebase to the default branch in GitHub -- NOT your built and deployed code. Ensure this happens by using the `gh-pages` branch to host the deployed application's build.

## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Mock-Up

The following animation shows the web application's appearance and functionality:

![User clicks through About Me, Portfolio, Resume, and Contact sections on the webpage and enters information on Contact page.](./Assets/20-react-homework-demo-01.gif)

## Getting Started

You’ll use `create-react-app` to build your portfolio, which will include the following:

* A single `Header` component that appears on multiple pages

* A single `Navigation` component within the header that will be used to conditionally render the different sections of your portfolio

* A single `Project` component that will be used multiple times in the Portfolio section

* A single `Footer` component that appears on multiple pages

**Note**: Because this application doesn’t include a back end or connect to an API, the contact form doesn't need to save this information right now. You'll add back-end functionality in the next few weeks. In the meantime, consider including your email address and phone number on the Contact page.

### Projects

For each project that is featured in your portfolio, include the following:

* An image of the deployed application (either a short animated GIF or screenshot)

* The title of the project

* A link to the deployed application

* A link to the corresponding GitHub repository

### Design

As with the previous portfolio Challenge, remember that "good" design is subjective; however, your site should look polished. Here are a few guidelines on what that means:

* Use mobile-first design.

* Choose a color palette that distinguishes your site from the default Bootstrap theme and unstyled HTML sites. Refer to resources like [Coolors](https://coolors.co/) or another color scheme generator to help you create something that will stand out.

* Ensure that the font size is large enough to read and that the colors don't cause eye strain.

* Consider using animations and React component libraries. Note that this will not affect your grade, but it might impact how potential employers gauge your knowledge.

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

    * Application must use React to render content.

    * Application has a single `Header` component that appears on multiple pages, with a `Navigation` component within it that’s used to conditionally render About Me, Portfolio, Contact, and Resume sections.

    * Application has a single `Project` component that’s used multiple times in the Portfolio section.

    * Application has a single `Footer` component that appears on multiple pages.

    * Application must be deployed to GitHub Pages.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* User experience is intuitive and easy to navigate.

* User interface style is clean and polished.

* Application uses a color scheme other than the default Bootstrap color palette.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains high-quality README file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a README that describes the project.

- - -
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
