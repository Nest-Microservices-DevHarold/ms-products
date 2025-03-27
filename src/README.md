# 🚀 Excepciones en NestJS (`throw new`)

En **NestJS**, los errores se manejan usando excepciones (`Exception Filters`). El framework proporciona varias excepciones listas para usar en `@nestjs/common`, y todas extienden de `HttpException`.

---

## 📌 **1. BadRequestException (400)**
**Cuándo usarla:** Cuando el cliente envía una solicitud con datos incorrectos o mal formateados.

```ts
import { BadRequestException } from '@nestjs/common';

throw new BadRequestException('Los datos enviados son incorrectos');
```

---

## 📌 **2. UnauthorizedException (401)**
**Cuándo usarla:** Cuando el usuario no está autenticado o sus credenciales son inválidas.

```ts
import { UnauthorizedException } from '@nestjs/common';

throw new UnauthorizedException('No estás autenticado');
```

---

## 📌 **3. ForbiddenException (403)**
**Cuándo usarla:** Cuando el usuario está autenticado pero **no tiene permisos** para realizar una acción.

```ts
import { ForbiddenException } from '@nestjs/common';

throw new ForbiddenException('No tienes permiso para realizar esta acción');
```

---

## 📌 **4. NotFoundException (404)**
**Cuándo usarla:** Cuando un recurso solicitado no existe en la base de datos.

```ts
import { NotFoundException } from '@nestjs/common';

throw new NotFoundException('Producto no encontrado');
```

---

## 📌 **5. MethodNotAllowedException (405)**
**Cuándo usarla:** Cuando el método HTTP usado no está permitido en una ruta.

```ts
import { MethodNotAllowedException } from '@nestjs/common';

throw new MethodNotAllowedException('Método no permitido en esta ruta');
```

---

## 📌 **6. NotAcceptableException (406)**
**Cuándo usarla:** Cuando el servidor no puede generar una respuesta en el formato solicitado por el cliente.

```ts
import { NotAcceptableException } from '@nestjs/common';

throw new NotAcceptableException('Formato de respuesta no aceptable');
```

---

## 📌 **7. RequestTimeoutException (408)**
**Cuándo usarla:** Cuando el servidor tarda demasiado en recibir la solicitud del cliente.

```ts
import { RequestTimeoutException } from '@nestjs/common';

throw new RequestTimeoutException('Tiempo de espera agotado');
```

---

## 📌 **8. ConflictException (409)**
**Cuándo usarla:** Cuando ocurre un conflicto con los datos, como un **registro duplicado**.

```ts
import { ConflictException } from '@nestjs/common';

throw new ConflictException('El correo ya está registrado');
```

---

## 📌 **9. GoneException (410)**
**Cuándo usarla:** Cuando un recurso que existía ya no está disponible y no volverá a estarlo.

```ts
import { GoneException } from '@nestjs/common';

throw new GoneException('Este recurso ya no está disponible');
```

---

## 📌 **10. PayloadTooLargeException (413)**
**Cuándo usarla:** Cuando un cliente envía un archivo o un payload demasiado grande.

```ts
import { PayloadTooLargeException } from '@nestjs/common';

throw new PayloadTooLargeException('El archivo excede el tamaño permitido');
```

---

## 📌 **11. UnsupportedMediaTypeException (415)**
**Cuándo usarla:** Cuando el servidor no admite el tipo de contenido enviado por el cliente.

```ts
import { UnsupportedMediaTypeException } from '@nestjs/common';

throw new UnsupportedMediaTypeException('Formato de archivo no admitido');
```

---

## 📌 **12. UnprocessableEntityException (422)**
**Cuándo usarla:** Cuando los datos enviados son válidos en formato, pero no en lógica de negocio.

```ts
import { UnprocessableEntityException } from '@nestjs/common';

throw new UnprocessableEntityException('No puedes comprar más de 10 unidades');
```

---

## 📌 **13. InternalServerErrorException (500)**
**Cuándo usarla:** Cuando ocurre un error inesperado en el servidor.

```ts
import { InternalServerErrorException } from '@nestjs/common';

throw new InternalServerErrorException('Error inesperado, intenta más tarde');
```

---

## 📌 **14. NotImplementedException (501)**
**Cuándo usarla:** Cuando una funcionalidad aún no está implementada.

```ts
import { NotImplementedException } from '@nestjs/common';

throw new NotImplementedException('Funcionalidad en desarrollo');
```

---

## 📌 **15. ServiceUnavailableException (503)**
**Cuándo usarla:** Cuando el servidor está en mantenimiento o sobrecargado.

```ts
import { ServiceUnavailableException } from '@nestjs/common';

throw new ServiceUnavailableException('El servicio está en mantenimiento');
```

---

## 📌 **16. GatewayTimeoutException (504)**
**Cuándo usarla:** Cuando el servidor no obtiene respuesta de un servicio externo en el tiempo esperado.

```ts
import { GatewayTimeoutException } from '@nestjs/common';

throw new GatewayTimeoutException('No se obtuvo respuesta del servicio externo');
```

---

## 🔥 **Resumen de las más usadas**

| Excepción | Código | Cuándo usarla |
|-----------|--------|--------------|
| `BadRequestException` | 400 | Datos incorrectos |
| `UnauthorizedException` | 401 | No autenticado |
| `ForbiddenException` | 403 | No autorizado |
| `NotFoundException` | 404 | Recurso no encontrado |
| `ConflictException` | 409 | Registro duplicado |
| `UnprocessableEntityException` | 422 | Datos no válidos en lógica |
| `InternalServerErrorException` | 500 | Error inesperado |

---

Si trabajas con **NestJS**, estas excepciones te ayudan a manejar errores de forma elegante. ¡Déjame saber si necesitas más detalles! 🚀

