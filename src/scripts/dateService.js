function normalizeDate(date) {
    const dateArray = [
        date.getDate(),
        date.getMonth() + 1,
        date.getFullYear(),
        date.getHours(),
        date.getMinutes(),
    ];
    return dateArray.map((date) => {
        console.log(date);
        if (date.toString().length < 2) {
            return '0' + date;
        }
        return date;
    });
}

export function generateDate(date) {
    const commentDate = date ? new Date(date) : new Date();
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const [day, month, year, hour, minute] = normalizeDate(commentDate);
    if (commentDate.toDateString() === today.toDateString()) {
        return `сегодня, ${hour}:${minute}`;
    } else if (commentDate.toDateString() === yesterday.toDateString()) {
        return `вчера, ${hour}:${minute}`;
    } else {
        return `${day}-${month}-${year}`;
    }
}
