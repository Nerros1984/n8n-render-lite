FROM node:18

# Crear carpeta y copiar archivos
WORKDIR /app
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto
EXPOSE 5678

# Comando de inicio
CMD ["npm", "start"]
