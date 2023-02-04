import serial
import requests

url = "http://localhost:3000/api/data"
ser = serial.Serial('COM4', 9600, timeout=1)

while(1):
    line = ser.readline()
    if line:
        string = line.decode()
        values = string.split(",")
        values[2] = values[2][:-1]
        if values[2] == '':
            values[2] = 0
        if int(values[1]) > 990:
            values[1] = 1
        elif int(values[1]) < 30:
            values[1] = -1
        else:
            values[1] = 0
        if int(values[2]) < 20:
            values[2] = 1
        elif int(values[2]) > 80:
            values[2] = -1
        else:
            values[2] = 0
        data = {
            "joystickX": int(values[1]),
            "joystickY": int(values[2])
        }
        response = requests.post(url, json=data)
ser.close()
