import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "TON_SERVICE_ID",
        "TON_TEMPLATE_ID",
        data,
        "TON_USER_ID"
      )
      .then(
        () => {
          alert("Message envoyé !");
          reset();
        },
        (error) => {
          console.error("Erreur :", error);
          alert("Une erreur est survenue.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4 rounded-lg bg-white/20">
      <div className="flex gap-4">
        <input
          {...register("lastname", { required: "Nom requis" })}
          placeholder="Votre nom"
          className="p-2 border rounded"
        />
        {errors.lastname && <span className="text-red-500">{errors.lastname.message}</span>}

        <input
          {...register("firstname", { required: "Prénom requis" })}
          placeholder="Votre prénom"
          className="p-2 border rounded"
        />
        {errors.firstname && <span className="text-red-500">{errors.firstname.message}</span>}
      </div>

      <input
        {...register("email", {
          required: "Email requis",
          pattern: { value: /^\S+@\S+$/i, message: "Email invalide" }
        })}
        placeholder="Votre email"
        className="p-2 border rounded"
      />
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}

      <textarea
        {...register("message", { required: "Message requis" })}
        placeholder="Votre message"
        className="p-2 border rounded"
      />
      {errors.message && <span className="text-red-500">{errors.message.message}</span>}

      <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
