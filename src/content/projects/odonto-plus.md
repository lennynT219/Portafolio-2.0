---
name: OdontoPlus
startDate: 2024-11-20
endDate: 2025-01-06
description: Aplicación web en Java basada en el modelo por capas, que utiliza JSP para la presentación, Servlets para la lógica de negocio y JPA para la capa de acceso a datos.
github: https://github.com/lennynT219/Odo_Sistema.git
img: /odoplus.webp
technologies: ['java', 'mssql', 'js', 'css']
color: black
---

Esta aplicación web es una solución integral diseñada para gestionar usuarios, odontólogos, pacientes y responsables de pacientes en un entorno clínico. Construida en Java, utiliza un enfoque basado en el modelo por capas para garantizar modularidad, escalabilidad y facilidad de mantenimiento.

## Características Principales

- **Gestión de usuarios:**

  - Registro, edición, eliminación y consulta de usuarios del sistema.

- **Gestión de odontólogos:**

  - Registro y actualización de datos profesionales.
  - Visualización de citas asignadas.

- **Gestión de pacientes:**

  - Registro de información personal y clínica.
  - Vinculación con responsables legales (cuando aplica).

- **Gestión de responsables:**

  - Registro y administración de datos del responsable del paciente.

- **Interfaz amigable:**
  - Uso de JSP para la presentación dinámica.
  - JavaScript y CSS para estilos y funcionalidad interactiva.

---

## Tecnologías Utilizadas

### Backend

- **Java:** Desarrollo de la lógica de negocio utilizando Servlets.
- **JSP:** Generación de contenido dinámico en la capa de presentación.
- **JPA:** Gestión de la persistencia de datos mediante mapeo objeto-relacional (ORM).
- **Maven:** Gestión de dependencias y ciclo de vida del proyecto.

### Base de Datos

- **Microsoft SQL Server (MSSQL):** Almacenamiento seguro y escalable de los datos clínicos y administrativos.

### Frontend

- **CSS:** Estilización personalizada.
- **JavaScript:** Funcionalidad dinámica en la interfaz de usuario.

---

## Beneficios de la Aplicación

1. **Modularidad:**  
   Gracias al modelo por capas, el sistema es fácil de mantener y extender, separando la lógica de negocio, la presentación y el acceso a datos.

2. **Escalabilidad:**  
   La arquitectura permite añadir nuevas funcionalidades sin afectar las existentes.

3. **Productividad:**  
   Automatiza procesos administrativos clave, como la gestión de pacientes y odontólogos.

4. **Experiencia de usuario:**  
   Interfaz intuitiva y moderna que facilita la navegación y el uso.

5. **Integración:**  
   Compatible con entornos empresariales que usan MSSQL para bases de datos.

---

## Requisitos para Ejecutar

- **Entorno de Desarrollo:**

  - Java 11 o superior.
  - Apache Tomcat 7 o superior.
  - Maven instalado.

- **Base de Datos:**

  - Microsoft SQL Server (MSSQL).
  - Configuración del archivo `persistence.xml` para la conexión.

- **Navegador Web:**
  - Compatible con navegadores modernos (Chrome, Firefox, Edge).

---
