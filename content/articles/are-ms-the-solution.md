---
title: "Are Microservices the solution?"
date: "2023-03-31"
author: Jorge
tags:
- code
- architecture
toc: true
summary: |
  We discusses a dilemma faced by us, a team of developers in deciding whether to build a new feature
  as a microservice or a new module within the existing project.
  I present the arguments of two team members, Alice and John, for their respective approaches.
  As the team's architect, we evaluate both options and recommends building the feature within the existing project, while taking measures to maintain the integrity and maintainability of the overall system.
---

As developers sometimes we face challenges that are not easy to solve. In a recent project we had to decide if we should build a new feature as a microservice or as a new module within the existing project.

If you ask me out of the blue I like the microservice approach. It is a good way to separate concerns and make the system more modular and scalable. However, I have seen many projects that have failed because of the complexity of the microservice architecture. In this article I will try to explain the pros and cons of each approach and the decision we made.

## A new feature

One day, the product owner requested a feature so that trade workers can apply for insurance for their shipments. The feature consists of a contract information page, an application form, a payment form, and a confirmation page.

After the new feature’s presentation, we talk with the team and notice there are diverging ideas emerging.

Alice, on the one hand, had suggested that we build the feature as a separate component because the application is becoming bigger and the source code is becoming increasingly complex.

John, on the other hand, had suggested that we should build a whole new insurance application feature in the same [Rust Rocket](https://rocket.rs/) project, along with the existing features.

**Alice’s arguments are:**

- Insurance application sounds like a whole new domain, and it doesn’t make sense to mix records of the insurance policy or financial information along with other records about shipment information and their statuses.
- Although it will take some time to set up a new repository and build a new pipeline, etc., in the long run, having this clean separation will benefit the business, because there are many customers waiting for this feature, and more complex requirements specific to the insurance can be built easily going forward.

<img src="/img/are-ms-the-solution/ms.png"/>

**John’s arguments are:**

- It’s faster to deliver because we already have the foundation for development.
- There will be a big overhead with creating a whole new component.
- The feature requirements for the insurance application are fairly straightforward, and we should not have a hard time implementing them.

<img src="/img/are-ms-the-solution/mo.png"/>

The product has been released for 12 months now and had been fairly successful with around 150 companies signed up and while 2 of the biggest clients originated with the request, a quick study from the customer success team showed that 35 clients would potentially be interested in the insurance application feature because they want all their trade-related information to be on the same platform.


## Our approach

As the team's architect, we approach this problem by evaluating both options and considering the short-term and long-term implications of each approach. The decision of using a micro service vs a monolith vs SOA is never easy.

On one hand, building the insurance application feature as a separate component has the advantage of clean separation of concerns, making the system more modular, maintainable, and easier to scale in the long run. However, it would require more effort upfront to set up a new repository, pipeline, and other infrastructure, and it could potentially introduce additional complexity in terms of integration and communication with other parts of the system.

> In a next article, I'll explain why I choose **GRPC** as the communication protocol between microservices.

On the other hand, building the insurance application feature within the existing [Rust Rocket](https://rocket.rs/) project would enable us to leverage the foundation we already have and deliver the feature faster. However, it could potentially make the codebase more complex and harder to maintain in the long run, especially if the feature requirements become more complex or divergent from the existing domain.

Given that there are already 35 potential customers interested in the insurance application feature, and that it aligns with the overall goal of having all trade-related information on the same platform, I would recommend building the feature within the existing [Rust Rocket](https://rocket.rs/) project, but with careful consideration for the potential impact on the existing codebase.

To mitigate the risk of introducing additional complexity and maintainability issues, I would recommend the following:

1. Use a separate module or namespace for the insurance application feature, so that it is clearly distinguished from other parts of the system, and can be easily removed or replaced if necessary.
    - By applying the [Hexagonal](https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749) (or Ports and Adapters) architecture, the domain logic (i.e. the business rules and policies) would be isolated from the infrastructure concerns (i.e. the user interface) through the use of ports and adapters.

    This would make it easier to develop and test the domain logic in isolation, without being dependent on the specific implementation details of the infrastructure. It would also make to swap out different implementations of the infrastructure (e.g. from monolith to a micro service architecture), without affecting the domain logic.

    Providing clear boundaries and interfaces between the domain logic and the infrastructure, the architecture can make it easier to manage and maintain the overall system.

2. Keep the code for the insurance application feature as simple and straightforward as possible, and avoid introducing unnecessary dependencies or interactions with other parts of the system.

3. Write comprehensive tests for the feature, and ensure that it is well-documented, with clear boundaries and interfaces that are easy to understand and use.

4. Monitor the performance and stability of the feature closely, and be prepared to refactor or revise the implementation if necessary, based on feedback from users or other stakeholders.

    By taking a thoughtful and strategic approach to building the insurance application feature, we can deliver the feature quickly and efficiently, while also maintaining the integrity and maintainability of the overall system.

## Conclusion

When faced with the decision of whether to build a new feature as a microservice or within an existing project, there are pros and cons to both approaches.

Building the feature as a microservice allows for clean separation of concerns and easier scalability in the long run, but could introduce complexity and require more effort upfront.

Building the feature within an existing project can leverage existing infrastructure and deliver the feature faster, but could make the codebase more complex and harder to maintain.

In the case of building an insurance application feature, we end up building it within the existing project with careful consideration for potential impact on the codebase.

By applying the Hexagonal architecture, keeping the code simple and straightforward, writing comprehensive tests, and monitoring performance and stability, the feature can be delivered quickly and efficiently while maintaining the integrity of the overall system.
