import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // one to one
  await prisma.person.create( {
    data: {
      first_name: 'Nikita',
      second_name: 'Plyako',
      passport_number: {
        create: {
          passport_number: "AB123456",
          expiration_date: new Date("2029-12-31")
        }
      }
    }
  }) 
  await prisma.passport.create( {
    data: {
      passport_number: 'AB535345',
      expiration_date: new Date("2029-10-22"),
      person: {
        create: {
          first_name: 'Ivan',
          second_name: 'Pupkin'
        }
      }
    }
  })
  //one to many
  await prisma.company.create( {
    data: {
      name: 'Google',
      employees: {
        create: 
          [{ first_name: "Alice", second_name: "Johnson" },
           { first_name: "Bob", second_name: "Smith" }]     
      }
    }
  })
  await prisma.employee.create({
    data: {
      first_name: 'Nikita',
      second_name: 'Plyako',
      company: {
        create: {name: 'Amazon'}
      }
    }
  }) 
  //many to many
  await prisma.student.create({
    data: {
      first_name: 'Nikita',
      second_name: 'Plyako',
      subjects: ['Math', 'History', 'KDM'],
      teachers: {
        create: [
          { teacher: { create: { first_name: 'Ivan', second_name: 'Buld', subject: 'Math' } } },
          { teacher: { create: { first_name: 'Olena', second_name: 'Hoped', subject: 'History' } } },
        ],
      },
    },
  })
  await prisma.teacher.create({
    data: {
      first_name: 'Olga',
      second_name: 'Ponomarenko',
      subject: 'Math',
      students: {
        create: [
          { student: { create: { first_name: 'Katya', second_name: 'Scobish', subjects: ['LAAG', 'KDM'] } } },
          { student: { create: { first_name: 'Ivan', second_name: 'Spatar', subjects: ['History', 'Ecology', 'PE'] } } },
        ],
      },
    },
  })
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })