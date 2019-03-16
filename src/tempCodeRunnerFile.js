function Foo() {
    const blach = () => {
        console.log(this);
    };

    return {
        blach
    };
}

const x = new Foo();

x.blach();
