anime({
    target: ".row svg",
    translateY: 10,
    autoplay: true,
    loop: true,
    easing: "easeInOutSine",
    direction: "alternate",
})
anime({
    target: "#zero",
    translateX: 10,
    autoplay: true,
    loop: true,
    easing: "easInOutSine",
    direction: "alternate",
    scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
    rotateY: { value: "+=180", dalay: 200 },
})