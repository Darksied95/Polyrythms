const paper = document.querySelector("#paper")
const pen = paper.getContext("2d");

const draw = () => {
    paper.width = paper.clientWidth
    paper.height = paper.clientHeight

    const start = {
        x: paper.width * 0.1,
        y: paper.height * 0.9
    }
    const end = {
        x: paper.width * 0.9,
        y: paper.height * 0.9
    }

    const center = {
        x: paper.width * 0.5,
        y: paper.height * 0.9
    }
    pen.strokeStyle = 'white';
    pen.lineWidth = 2;
    pen.beginPath();

    //starting points
    pen.moveTo(start.x, start.y)
    //ending points
    pen.lineTo(end.x, end.y)
    //to actually make it draw
    pen.stroke()


}

draw()