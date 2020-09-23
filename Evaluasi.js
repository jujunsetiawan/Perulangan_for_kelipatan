for(i = 1; i <= 20; i++) {
    if(i % 3 && i % 5 == 0) {
        document.write('hore');
    } else if (i % 3 == 0) {
        document.write('hai');
    } else {
        document.write(i);
    }
    document.write('<br>');
}